utils = 
    qa: (selector, scope) ->
        nodes = (scope || document).querySelectorAll(selector)
        Array::slice.call(nodes)

