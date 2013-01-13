utils = 
    qa: (selector, scope) ->
        nodes = (scope || document).querySelector(selector)
        Array::slice.call(nodes)

