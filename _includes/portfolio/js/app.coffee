utils = (->

    id_counter = 0
    format_r = /[^a-zA-Z0-9-]/g
    proto_r = /.*?:\/\//g

    return {

        q: (selector, scope) ->
            (scope || document).querySelector(selector)

        qa: (selector, scope) ->
            nodes = (scope || document).querySelectorAll(selector)
            Array::slice.call(nodes, 0)

        id: (pfx) ->
            id = ++id_counter
            start = if pfx? then '' + pfx else ''
            start + id

        trim: (str) ->
            String::trim.call(str)

        format: (str) ->
            @trim(str.toLowerCase()).replace(format_r, "-")

        remove: (el) ->
            el.parentElement.removeChild(el)

        img_name: (url) ->
            @trim(url).replace(proto_r, "").replace(format_r, "-")

    }

)()


class Site
    constructor: (@conf, @container) ->
        @conf.trunc_site_link = @conf.site_link.replace(/.*?:\/\//g, "")
        @conf.id = utils.id("site-")
        @conf.site_img = utils.img_name(@conf.site_link)
        @image = """<img class="browser-screenshot" src="img/screenshots/#{ @conf.site_img }.png" alt="screenshot" />"""
        if Modernizr.csstransforms
            @draw_iframe()
        else
            @draw_image()

    draw_ui: (content) ->
        @container.innerHTML += """<div id="#{ utils.format(@conf.site_name) }" class="item">
            <a class="lb-reset" href="#_"></a>
            <div class="lb-wrapper">
                <div class="browser" data-site-id="#{ @conf.id }">
                    <a class="browser-search" href="##{ utils.format(@conf.site_name) }">#{ @conf.trunc_site_link }</a>
                    <div class="browser-dom">
                        #{ content }
                    </div>
                </div>
                <div class="lb-content">
                    <h2><a href="#{ @conf.site_link}" target="_blank">#{ @conf.site_name }</a></h2>
                    #{ @conf.site_desc || "" }
                    <p><a href="#{ @conf.site_link}" target="_blank">#{ @conf.trunc_site_link }</a></p>
                    <p><a href="#_">Close</a></p>
                </div>
            </div>
        </div>"""

    draw_image: ->
         @draw_ui(@image)

    draw_iframe: ->
        @draw_ui("""#{ @image }
                    <iframe class="browser-iframe"></iframe>
                    <div class="browser-spinner"></div>""")
        # who would have thought innerHTML is asyncronous?!
        setTimeout =>
            @load.call(@)
        , 1

    load: ->
        @browser = utils.q("[data-site-id=\"#{ @conf.id }\"]")
        @iframe = utils.q(".browser-iframe", @browser)
        @spinner = utils.q(".browser-spinner", @browser)
        @dom = utils.q(".browser-dom", @browser)
        @iframe.addEventListener "load", (e) =>
            @browser.classList.add("browser-show")
        @iframe.src = @conf.site_link
        @iframe_showing = true

    remove_iframe: ->
        @browser.classList.remove("browser-show")
        setTimeout =>
            utils.remove(@iframe)
            @browser.classList.add("browser-show")
        , 500

    add_iframe: ->
        @browser.classList.remove("browser-show")
        setTimeout =>
            @dom.insertBefore(@iframe, @spinner)
        , 500

    toggle_iframe: ->
        if @iframe_showing
            @remove_iframe()
        else
            @add_iframe()
        @iframe_showing = !@iframe_showing


class Portfolio
    constructor: (@init, @selector) ->
        @container = utils.q(@selector)
        return if !@container?
        @render()
        @bind_btns()

    render: ->
        @iframe_showing = Modernizr.csstransforms
        @browsers = []
        div = false
        @init.forEach (o) =>
            if o.p
                div = false
                @p(o.p)
            else
                if !div
                    div = document.createElement("div")
                    div.className = "container"
                    @container.appendChild(div)
                @browsers.push(new Site(o.site, div))

    p: (txt) ->
        @container.innerHTML += "<p>#{ txt }</p>"

    toggle_all: (show_iframe) ->
        return if show_iframe == @iframe_showing
        method = "#{ if show_iframe then 'add' else 'remove' }_iframe"
        @browsers.forEach (browser) ->
            browser[method]()
        @iframe_showing = !@iframe_showing

    bind_btns: ->
        nav = utils.q(".iframe-toggle")
        nav.classList.add("on")
        utils.qa(".iframe-toggle-butt").forEach (el) =>
            el.addEventListener "click", (e) =>
                e.preventDefault()
                bool = el.id == "true"
                @toggle_all(bool)
                if bool
                    nav.classList.remove("off")
                    nav.classList.add("on")
                else
                    nav.classList.remove("on")
                    nav.classList.add("off")


window.Portfolio = Portfolio

#test = [
    #{ p: "lol what" }
    #{ site: {
        #site_name: "Semantico Coding Standards"
        #site_link: "http://semantico.github.com/standards"
        #site_img: "standards"
    #}}
    #{ p: "lol what" }
    #{ site: {
        #site_name: "Semantico Corporate Website"
        #site_link: "http://www.semantico.com"
        #site_img: "standards"
    #}}
    #{ site: {
        #site_name: "xyz"
        #site_link: "http://www.semantico.com"
        #site_img: "standards"
    #}}
    #{ site: {
        #site_name: "Old Acres Printers"
        #site_link: "http://www.oldacres.co.uk"
        #site_img: "standards"
    #}}
    #{ p: "lol what" }
    #{ site: {
        #site_name: "Semantico Coding Standards"
        #site_link: "http://semantico.github.com/standards"
        #site_img: "standards"
    #}}
#]

#window.portfolio = new Portfolio(test, '#main')
