const ckeditor = {
    constructor : (function(editorSet){
        this.config = this._constructorEditorSet(editorSet);
        return new Promise((resolve,reject)=>{
            // if(!this.config.isRequire){
            //     reject(this.config.message);
            // }
            // var a = {
            //     b :  ()=>{
            //         // console.log(this)
            //     }
            // }
            // a.b()
            console.log(this.config);
            var createClick = this._createClick();
            this._clickTestBtn();

            this._constructorPromiseAll([createClick]).then((promiseRes)=>{
                promiseRes === true ? resolve(true) : reject(false);
            })
        })
    }),
    _jqueryAjax(url, data = null, type = null) {
        return $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "json",
            cache : false,
            processData: type == null ? true : false,
            contentType: type == null ? "application/x-www-form-urlencoded; charset=UTF-8" : false
        });
    },
    _getImgList(){
        var dom = $('<div></div>');
        $(dom).append(this.getData());
        var resArr = [];
        $(dom).find('img').filter((key,val)=>{
            if($(val).prop('src').indexOf(this.config.imgUrl + this.config.tmpFolderName) !== -1){
                resArr.push($(val).prop('src').split(this.config.tmpFolderName + '/')[1]);
            }
        })
        return resArr;
    },
    _changeImgTmpName(){
        var dom = $('<div></div>');
        $(dom).append(this.getData());
        $(dom).find('img').filter((key,val)=>{
            if($(val).prop('src').indexOf(this.config.imgUrl + this.config.tmpFolderName) !== -1){
                var beforeFolderName = this.config.imgUrl + this.config.tmpFolderName ;
                var afterFolderName = this.config.imgUrl + this.config.folderName ;
                var changeSrc = $(val).prop('src').replace(beforeFolderName, afterFolderName);
                $(dom).find('img').eq(key).prop('src',changeSrc);
            }
        })
        this.setDataRemove();
        this.setData($(dom).html());
    },
    _setEvtBtn(){
        this._clickCreateSubmitBtn();
        this._clickReadBtnClass();
        this._clickUpdateBtn();
        this._clickUpdateSubmitBtn();
        this._clickDeleteBtn();
    },
    _clickCreateSubmitBtn(){
        $(this.config.createSubmitBtnClass).off('click').on('click',(e)=>{
            $(this.config.createSubmitBtnClass).off('click');

            var url = this.config.crudUrl + '/createConfirm';
            var getImgList = this._getImgList();

            if(getImgList.length === 0){
                this._clickCreateSubmitBtn();
                return ;
            }

            var data = {
                imgTmpList : getImgList,
                folderName : this.config.folderName,
            }

            this._jqueryAjax(url,data).then(()=>{
                this._changeImgTmpName();
                this._clickCreateSubmitBtn();
            })
        })
    },
    _clickReadBtnClass(){
        $(this.config.readBtnClass).off('click').on('click',(e)=>{
            $(this.config.readBtnClass).off('click');
            var url = this.config.crudUrl + '/read';
            this._jqueryAjax(url).then(()=>{

                this._clickReadBtnClass();
            })
        })
    },
    _clickUpdateBtn(){
        $(this.config.updateBtnClass).off('click').on('click',(e)=>{
            $(this.config.updateBtnClass).off('click')
            var url = this.config.crudUrl + '/update';
            this._jqueryAjax(url).then(()=>{


                this._clickUpdateBtn();
            })
        })
    },
    _clickUpdateSubmitBtn(){
        $(this.config.updateSubmitBtnClass).off('click').on('click',(e)=>{
            $(this.config.updateSubmitBtnClass).off('click')
            var url = this.config.crudUrl + '/updateConfirm';
            this._jqueryAjax(url).then(()=>{

                this._clickUpdateSubmitBtn();
            })
        })
    },
    _clickDeleteBtn(){
        $(this.config.deleteBtnClass).off('click').on('click',(e)=>{
            $(this.config.deleteBtnClass).off('click')
            var url = this.config.crudUrl + '/delete';
            this._jqueryAjax(url).then(()=>{

                this._clickDeleteBtn();
            })
        })
    },
    _constructorEditorSet(editorSet) {
        var isValArr = ['rootId','originUrl','crudUrl','uploadUrl','imgUrl','folderName','tmpFolderName','createSubmitBtnClass','readBtnClass','updateBtnClass','updateSubmitBtnClass','deleteBtnClass'];
        for(var item of isValArr){
            if(!editorSet.hasOwnProperty(item)){
                return {
                    isRequire : false ,
                    message : 'editor set '+item+' isRequire error'
                };
            }
        }
        for(var[key,val] of Object.entries(editorSet)){
            if(isValArr.indexOf(key) !== -1){
                if(val === undefined){
                    return false;
                }
            }
        }

        return {
            isRequire : true,
            rootId : this._constructorEditorSetIs(editorSet.rootId),
            originUrl : this._constructorEditorSetIs(editorSet.originUrl),
            crudUrl : this._constructorEditorSetIs(editorSet.crudUrl),
            uploadUrl : this._constructorEditorSetIs(editorSet.uploadUrl),
            imgUrl : this._constructorEditorSetIs(editorSet.imgUrl),
            folderName : this._constructorEditorSetIs(editorSet.folderName),
            tmpFolderName : this._constructorEditorSetIs(editorSet.tmpFolderName),
            createBtnClass : this._constructorEditorSetIs(editorSet.createBtnClass),
            createSubmitBtnClass : this._constructorEditorSetIs(editorSet.createSubmitBtnClass),
            readBtnClass : this._constructorEditorSetIs(editorSet.readBtnClass),
            updateBtnClass : this._constructorEditorSetIs(editorSet.updateBtnClass),
            updateSubmitBtnClass : this._constructorEditorSetIs(editorSet.updateSubmitBtnClass),
            deleteBtnClass : this._constructorEditorSetIs(editorSet.deleteBtnClass),
            isReadOnly : this._constructorEditorSetIs(editorSet.isReadOnly),
        }
    },
    _constructorEditorSetIs(editorSetVal){
        if(editorSetVal !== undefined){
            return editorSetVal;
        }else {
            return null;
        }
    },
    _constructorPromiseAll(promiseArr) {
        return new Promise((resolve,reject)=>{
            Promise.all(promiseArr).then((promiseRes)=>{
                promiseRes.map((val,key)=>{
                    if(val !== true) {
                        resolve(false);
                    }
                })
                resolve(true);
            })
        })
    },
    _createClick() {
        return new Promise((resolve,reject)=>{
            if(this.config.createBtnClass === null){
                var board = this._ckeditor($(this.rootId)[0]).then((promiseRes)=>{
                    resolve(promiseRes);
                })
            }else {
                $(this.config.createBtnClass).on('click', (e) => {
                    var board = this._ckeditor($(rootId)[0]).then((promiseRes)=>{
                        resolve(promiseRes);
                    })
                })
            }
        })
    },
    _clickTestBtn(rootId) {
        $('#test_btn').on('click', (e) => {
            // this.destroyEditor();
            this.toggleReadOnly();
            console.log(this.getData())

        })
    },
    _ckeditor : function (selectDom) {
        return new Promise((resolve,reject)=>{
            this.selectDom = selectDom;
            if (typeof selectDom != "undefined") {
                var editorSet = {
                    extraPlugins: [this.MyCustomUploadAdapterPlugin]
                }
                if(this.config.isReadOnly) {
                    editorSet.toolbar = []
                };

                ClassicEditor.create(selectDom, editorSet).then(editor => {
                    editor.isReadOnly = this.config.isReadOnly;
                    this.getData = function () {
                        return editor.getData();
                    };
                    this.setData = function (data) {
                        let editorData = editor.getData();
                        editorData += data;
                        editor.setData(editorData, "text/html");
                    };
                    this.setDataRemove = function () {
                        editor.setData('', "text/html");
                    };
                    //ckeditor 제거
                    this.destroyEditor = function () {
                        editor.destroy();
                    };
                    this.toggleReadOnly = function(){
                        if(this.config.isReadOnly){
                            this.config.isReadOnly = false;
                            editor.isReadOnly = false ;
                            $(this.config.rootId).siblings('.ck-editor').find('.ck-toolbar__items').css('display','flex');
                        }else {
                            this.config.isReadOnly = true;
                            editor.isReadOnly = true ;
                            $(this.config.rootId).siblings('.ck-editor').find('.ck-toolbar__items').css('display','none');
                        }
                    }
                    //키다운 막기
                    this.keyDownPrevent = function () {
                        editor.editing.view.document.on(
                            "keydown",
                            (evt, data) => {
                                evt.stop();
                                data.preventDefault();
                                data.stopPropagation();
                            }, {
                                priority: "highest"
                            }
                        );
                    };
                    this.test = function () {
                        console.log(editor.model.clone());
                    };
                    //게시글수정 초기 ckeditor 내용셋팅
                    // if (type == 0) {
                    //     let data = $(this.selectDom)
                    //         .siblings('input[name="board[contents]"]')
                    //         .val();
                    //     editor.setData(data);
                    //
                    //     editor.model.document.on("change:data", () => {
                    //         getData = editor.getData();
                    //         $(this.selectDom)
                    //             .siblings('input[name="board[contents]"]')
                    //             .val(getData);
                    //     });
                    // } else if (type == 1) {
                    //     editor.model.document.on("change:data", () => {
                    //         getData = editor.getData();
                    //         $(this.selectDom)
                    //             .siblings('input[name="comment[comment]"]')
                    //             .val(getData);
                    //     });
                    // }
                    resolve(true);
                })
            }
        })
    },
    MyCustomUploadAdapterPlugin : function(editor){
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader, Ckeditor.config.uploadUrl, Ckeditor.config.folderName, Ckeditor.config.tmpFolderName)
        }
    },
}



function Editor(selectDom, type = 0, isReadOnly=false, loadSetData=null){
    this.selectDom = selectDom;


    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader)
        }
    }
    console.log(this.MyCustomUploadAdapterPlugin);
    if (typeof selectDom != "undefined") {
        if (type == 0) {
            var editorSet = { extraPlugins: [MyCustomUploadAdapterPlugin]};
        } else if (type == 1) {
            var editorSet = {
                toolbar : [],
                extraPlugins: [MyCustomUploadAdapterPlugin],
            };
        }else if (type == 2){
            var editorSet = {};
        }
        ClassicEditor.create(selectDom, editorSet).then(editor => {
            if(type == 1){
                editor.isReadOnly = true;
            }
            console.log(editor.data.addStyleProcessorRules())
            editor.data.addStyleProcessorRules({
                border : {
                    color: {red,red,red,red},
                }
            })
            this.getData = function () {
                return editor.getData();
            };
            this.setData = function(data) {
                let editorData = editor.getData();
                editorData += data;
                editor.setData(editorData, "text/html");
            };
            this.setDataRemove = function () {
                editor.setData('', "text/html");
            };
            //ckeditor 제거
            this.destroy = function () {
                editor.destroy();
            };
            //키다운 막기
            this.keyDownPrevent = function () {
                editor.editing.view.document.on(
                    "keydown",
                    (evt, data) => {
                        evt.stop();
                        data.preventDefault();
                        data.stopPropagation();
                    }, {
                        priority: "highest"
                    }
                );
            };
            this.readOnly = function() {
                editor.isReadOnly = true;
            }
            if(isReadOnly){
                this.readOnly();
            }
            if(loadSetData !== null){
                this.setData(loadSetData.contents);
            }
        })
    }
}

const UploadAdapter = class {
    constructor(loader, uploadUrl, folderName, tmpFolderName) {
        this.loader = loader;
        this.uploadUrl = uploadUrl;
        this.folderName = folderName;
        this.tmpFolderName = tmpFolderName;
    }

    upload() {
        return this.loader.file.then( file => new Promise(((resolve, reject) => {
            this._initRequest();
            this._initListeners( resolve, reject, file );
            this._sendRequest( file );
        })))
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        var url = this.uploadUrl + '/' +this.tmpFolderName;
        xhr.open('POST', url , true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'

        xhr.addEventListener('error', () => {reject(genericErrorText)})
        xhr.addEventListener('abort', () => reject())
        xhr.addEventListener('load', () => {
            const response = xhr.response

            if(!response || response.error) {
                return reject( response && response.error ? response.error.message : genericErrorText );
            }

            console.log(response)
            $('.js-ckeditor-uploaded').trigger('click.data',response);
            resolve({
                default: response.url //업로드된 파일 주소
            })
        })
    }

    _sendRequest(file) {
        var data = new FormData()
        data.append('upload',file)
        this.xhr.send(data)
        // console.log(data)

        // for (var value of data.values()) {
        //     this._changeFilesName(value);
        // }
    }

    _changeFilesName(response){
        // $('.js-file-name').text('');
        var res = '';
        // this.files.map((val,key)=>{
        res +=
            '<div class="js-delete-file-img" ' +
            'data-idx=""'+
            '>' +
            '<span>' + response.name + '</span>' +
            '<span class="iconDeleteImg"></span>'+
            '</div>'
        // })
        $('.js-file-name').append(res);

        this._clickLayerFilesDeleteBtn();
    }

    _clickLayerFilesDeleteBtn() {
        $('.js-delete-file-img').unbind('click').on('click', (e) => {
            var file_name = $(e.target).closest('.js-delete-file-img').data('file_name');
            if(file_name === undefined){
                alert('이미지가 업로드 중입니다.')
                return;
            }
            $('.js-ckeditor-uploaded').trigger('click.delete',file_name);
        })
    }
}
//
// var editorSet = {
//     rootId : '#root_ck',
//     originUrl : 'https://new.gcsnow.net/',
//     imgUrl : 'res/img/',
//     crudUrl : 'https://new.gcsnow.net/home/ckeditor',
//     uploadUrl : 'https://new.gcsnow.net/home/upload',
//     folderName : 'base',
//     tmpFolderName : 'tmp',
//     createBtnClass : '.editor_create_btn',
//     createSubmitBtnClass : '.editor_create_Submit_btn',
//     readBtnClass : '.editor_read_btn',
//     updateBtnClass : '.editor_update_btn',
//     updateSubmitBtnClass : '.editor_update_Submit_btn',
//     deleteBtnClass : '.editor_delete_btn',
//     isReadOnly : false ,
// }
//
// Ckeditor.constructor(editorSet).then((editorRes)=>{
//     console.log(Ckeditor.getData());
//     Ckeditor._setEvtBtn();
// })
