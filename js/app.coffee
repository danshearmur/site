utils = 
    qa: (selector, scope) ->
        nodes = (scope || document).querySelectorAll(selector)
        Array::slice.call(nodes)


class Site
    constructor: (@conf, @container) ->
        @conf.trunc_site_link = @conf.site_link.replace(/.*?:\/\//g, "")
        @drawIframe()

    drawUi: (content) ->
        @container.innerHTML += """<div class="browser" id=lol>
            <a class="browser-search" href="#{ @conf.site_link }">#{ @conf.trunc_site_link }</a>
            <div class="browser-dom">
                #{ content }
            </div>
        </div>"""

    drawImage: ->
         @drawUi("""<img src="img/screenshots/#{ @conf.site_img }.png" alt="screenshot" />""")

    drawIframe: ->
        @drawUi("""<iframe class="broser-iframe"></iframe>
                    <div class="browser-spinner"></div>""")


container = utils.qa('.container')


site = new Site({
    site_link: "http://semantico.github.com/standards"
    site_img: "standards"
}, container[0])
