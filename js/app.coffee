utils = (->

    id_counter = 0

    return {

        q: (selector, scope) ->
            (scope || document).querySelector(selector)

        qa: (selector, scope) ->
            nodes = (scope || document).querySelectorAll(selector)
            Array::slice.call(nodes)

        id: (pfx) ->
            id = ++id_counter
            start = if pfx? then '' + pfx else ''
            start + id

    }

)()

class Site
    constructor: (@conf, @container) ->
        @conf.trunc_site_link = @conf.site_link.replace(/.*?:\/\//g, "")
        @conf.id = utils.id("site-")
        if Modernizr.csstransforms
            @drawIframe()
        else
            @drawImage()

    drawUi: (content) ->
        @container.innerHTML += """<div class="browser" data-site-id="#{ @conf.id }">
            <a class="browser-search" href="#{ @conf.site_link }" target="_blank">#{ @conf.trunc_site_link }</a>
            <div class="browser-dom">
                #{ content }
            </div>
        </div>"""
        @browser = utils.q("[data-site-id=\"#{ @conf.id }\"]", @container)

    drawImage: ->
         @drawUi("""<img src="img/screenshots/#{ @conf.site_img }.png" alt="screenshot" />""")

    drawIframe: ->
        @drawUi("""<iframe class="browser-iframe"></iframe>
                    <div class="browser-spinner"></div>""")
        @iframe = utils.q(".browser-iframe", @browser)
        @spinner = utils.q(".browser-spinner", @browser)
        @load()

    load: ->
        @iframe.addEventListener('load', (e) =>
            @browser.className += " browser-iframe-show"
        )
        @iframe.src = @conf.site_link





container = utils.q('.container')

site = new Site({
    site_link: "http://semantico.github.com/standards"
    site_img: "standards"
}, container)
