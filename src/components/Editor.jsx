import React from 'react'
import JoditEditor from 'jodit-react';
import { upload } from '@testing-library/user-event/dist/upload';

const Editor = ({ value, onChange, action, close, onSubmit, titleChange, title, heading }) => {

    const submitHandler = () => {
        onSubmit()
        close()
    }

    return (
        <div className='p-4 position-absolute z-1 d-flex flex-column' style={{ backgroundColor: '#000000c4', width: '-webkit-fill-available', minHeight: '100vh' }}>
            <h4 className='text-center text-light'>{heading}</h4>
            <div className="mx-auto">
                <div>
                    <input type="text" className='form-control form-control-sm my-2 ' placeholder='title' value={title} onChange={(e) => titleChange(e.target.value)} />
                </div>
                <JoditEditor
                    value={value}
                    onChange={(e) => onChange(e)}
                    config={{
                        enableDragAndDropFileToEditor: true,
                        // uploader: {
                        //     url: 'http://localhost:5500/api/upload-image',
                        //     imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
                        //     //headers: {"token":`${db.token}`},
                        //     withCredentials: false,
                        //     pathVariableName: 'path',
                        //     format: 'json',
                        //     method: 'POST',
                        //     prepareData: function (formData) {
                        //         var file = formData.getAll('files[0]')[0]
                        //         formData.append('image', file)

                        //         formData.delete('files[0]')
                        //         formData.delete('path')
                        //         formData.delete('source')

                        //         return formData
                        //     },
                        //     isSuccess: function (resp) {
                        //         console.log("resp", resp);
                        //         return !resp.error;
                        //     },
                        //     getMessage: function (resp) {
                        //         console.log("resp",resp);
                        //         return resp.msgs.join("\n");
                        //     },
                        //     process: function (resp) {
                        //         const imageUrl = resp?.imageUrl;

                        //         return imageUrl ;
                        //     },
                        // }
                        // uploader: {
                        //     url: 'http://localhost:5500/api/upload-image',
                        //     queryBuild: function (data) {
                        //         return JSON.stringify(data);
                        //     },
                        //     contentType: function () {
                        //         return 'application/json';
                        //     },
                        //     buildData: function (data) {
                        //         return new Promise(function (resolve, reject) {
                        //             var reader = new FileReader();
                        //             reader.readAsDataURL(data.getAll('files[0]')[0]);
                        //             reader.onload = function () {
                        //                 return resolve({
                        //                     image: reader.result
                        //                 });
                        //             };
                        //             reader.onerror = function (error) {
                        //                 reject(error);
                        //             };
                        //         });
                        //     }
                        // }
                        uploader: {
                            url: 'http://localhost:5500/api/upload-image',
                            isSuccess: function (resp) {
                                return resp;
                            },
                            process: function (resp) {                       
                                return {
                                    files: resp.data.files,
                                    path: resp.data.path,
                                    baseurl: resp.data.baseurl,
                                    error: resp.data.error,
                                    message: resp.data.message
                                }
                            },
                            defaultHandlerSuccess: function (data) {
                                var i, field = 'files';                      
                                if (data[field] && data[field].length) {
                                    for (i = 0; i < data[field].length; i += 1) {
                                        this.selection.insertImage(data.baseurl + data[field][i]);
                                    }
                                }
                            },
                        }
                        // ,
                        // filebrowser:true

                    }
                    }
                />
            </div>
            <div className='container d-flex justify-content-center  p-3'>
                <div>
                    <button className='btn btn-sm btn-success mx-2' onClick={submitHandler}>{action}</button>
                </div>
                <div>
                    <button className='btn btn-sm btn-danger  mx-2' onClick={() => close()} >close</button>
                </div>
            </div>
        </div>
    )
}

export default Editor