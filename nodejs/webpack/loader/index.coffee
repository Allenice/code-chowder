###*
# loader test 
# @date 2016-03-11 10:43:29
# @author Allenice <994298628@qq.com>
# @link http://www.allenice233.com
### 


path = require 'path'
Swig = require('swig').Swig
beautify_html = require('js-beautify').html
utils = require 'loader-utils'

module.exports = (content)->
    @cacheable()
    filepath = @resourcePath
    filename = path.basename filepath
    isPartial = /^_/.test filename

    @query = utils.parseQuery @query

    options = extend {}, {
            cache: false
        }, @query

    swig = new Swig options
    addDependence swig, @

    # 不编译 '_' 开头的文件
    if isPartial
        return ''

    result = swig.renderFile(filepath, {name: 'Allenice'})

    return 'module.exports = ' + JSON.stringify(result) + ';';


# 添加模板依赖，以便监听
addDependence = (swig, loaderCtx)->
    swigLoader = extend {}, swig.options.loader
    _load = swigLoader.load

    swigLoader.load = (filepath)->
        console.log path.basename(filepath)
        if filepath != loaderCtx.resourcePath
            loaderCtx.addDependency filepath
        _load.apply swigLoader, arguments

    extend swig.options, {loader: swigLoader}

# 继承
extend = (target)->
    sources = Array.prototype.slice.call(arguments, 1)
    sources.forEach (source)->
        Object.keys(source or {}).forEach (key)->
            target[key] = source[key]

    target

inArray = (val, arr)->
    (arr.filter (item)-> item == val).length > 0
