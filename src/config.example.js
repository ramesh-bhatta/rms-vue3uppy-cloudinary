export default {
  cloudinary: {
    uppyInstanceId: "uppyAdgroupImageUpload", // optional default 'uppy'
    cloudName: "<your_cloudinary_cloud_name", // required
    preset: "<your_cloudinary_preset>", // required
    tags: ["gallery", "profile"], // optional default []
    btnTriggerClass: "uppy-trigger", // optional default 'uppy-trigger'
    buttonText: "Upload Files", // optional default 'Upload Files'
    buttonClass: "btn is-primary", // optional default 'btn'
    maxFileSize: 4 * 1024 * 1024, // optional default 4MB
    maxNumberOfFiles: 20, //optional default 20
    minNumberOfFiles: 1, //optional default 1
    allowedFileTypes: ["image/png", "image/jpeg"], // optional default ['image/png', 'image/jpeg']
    closeModalOnClickOutside: true, // optional default true
    closeAfterFinish: true, // Close Modal After Upload optional default true
    note: "Images only, max 20 files, up to 4MB", // optional default ''
    autoProceed: false, // optional default false
    theme: "dark", // optional default 'light'  options 'light' | 'dark'
    debug: true, // optional default false
    inline: false, // optional default false Purpose: If you want to show the modal or inline
    showProgressDetails: true, // optional default false
    proudlyDisplayPoweredByUppy: false, // optional default false
    allowedMetaFields: ["file", "name", "upload_preset", "tags", "size"], // optional default ['file', 'name', 'upload_preset', 'tags']
  }
};



