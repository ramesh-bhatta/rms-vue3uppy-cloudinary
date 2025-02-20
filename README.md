# Vue3 Uppy Cloudinary

This library simplifies image uploads in Vue 3 applications by integrating Uppy and Cloudinary. It provides a reusable component with customizable options, making it easy to add file uploads without dealing with complex configurations.

Installation

```
npm install rms-vue3uppy-cloudinary
```

# Usage

## Register Globally (supports plugin use and component register)

Go to vue main.js file

### Option1: Plugin concept

```
import { createApp } from 'vue'
import App from './App.vue'
import 'rms-vue3uppy-cloudinary/dist/rms-vue3uppy-cloudinary.css';
import UppyCloudinaryUploader from 'rms-vue3uppy-cloudinary';

const app = createApp(App);
app.use(UppyCloudinaryUploader);
app.mount('#app');
```

Now, you can use <UppyCloudinaryUploader /> anywhere in your app.

### Option2: Without plugin concept register component globally

```
import { createApp } from 'vue';
import App from './App.vue';
import 'rms-vue3uppy-cloudinary/dist/rms-vue3uppy-cloudinary.css';
import {UppyCloudinaryUploader} from 'rms-vue3uppy-cloudinary';

const app = createApp(App);

// Use the plugin globally
app.use(UppyCloudinaryUploader);

app.mount('#app');
```

Now, you can use <UppyCloudinaryUploader /> anywhere in your app.

## Register Locally inside component

[better performance as its tree shaking]

```
import 'rms-vue3uppy-cloudinary/dist/rms-vue3uppy-cloudinary.css'
import {UppyCloudinaryUploader} from 'rms-vue3uppy-cloudinary'
```

Now, you can use <UppyCloudinaryUploader /> inside your component.

## Uppy Cloudinary Uploader Props

Below is the list of available props for the Vue 3 Uppy Cloudinary Uploader component:

| **Prop**                      | **Required** | **Default Value**                           | **Description**                                         |
| ----------------------------- | ------------ | ------------------------------------------- | ------------------------------------------------------- |
| `id`                          | ❌           | `'uppy'`                                    | Unique identifier for the Uppy instance.                |
| `cloudName`                   | ✅           | `N/A`                                       | Cloudinary cloud name (required).                       |
| `preset`                      | ✅           | `N/A`                                       | Cloudinary upload preset (required).                    |
| `tags`                        | ❌           | `[]`                                        | Tags for uploaded files.                                |
| `btnTriggerClass`             | ❌           | `'uppy-trigger'`                            | CSS class for the upload button trigger.                |
| `buttonText`                  | ❌           | `'Upload Files'`                            | Text displayed on the upload button.                    |
| `buttonClass`                 | ❌           | `'btn'`                                     | CSS class for styling the upload button.                |
| `maxFileSize`                 | ❌           | `4 * 1024 * 1024` (4MB)                     | Maximum allowed file size.                              |
| `maxNumberOfFiles`            | ❌           | `20`                                        | Maximum number of files allowed for upload.             |
| `minNumberOfFiles`            | ❌           | `1`                                         | Minimum number of files required.                       |
| `allowedFileTypes`            | ❌           | `['image/png', 'image/jpeg']`               | Allowed file types.                                     |
| `closeModalOnClickOutside`    | ❌           | `true`                                      | Whether the modal should close when clicking outside.   |
| `closeAfterFinish`            | ❌           | `true`                                      | Whether the modal should close after upload completion. |
| `note`                        | ❌           | `''`                                        | Custom note shown to users in the uploader.             |
| `autoProceed`                 | ❌           | `false`                                     | Whether uploads should start automatically.             |
| `theme`                       | ❌           | `'light'`                                   | Theme of the uploader (`'light'` or `'dark'`).          |
| `debug`                       | ❌           | `false`                                     | Enable debug mode for troubleshooting.                  |
| `inline`                      | ❌           | `false`                                     | Display uploader inline instead of as a modal.          |
| `showProgressDetails`         | ❌           | `false`                                     | Show detailed progress of the upload.                   |
| `proudlyDisplayPoweredByUppy` | ❌           | `false`                                     | Show the "Powered by Uppy" text.                        |
| `allowedMetaFields`           | ❌           | `['file', 'name', 'upload_preset', 'tags']` | Allowed metadata fields for uploaded files.             |

> **Note:** `✅` means the prop is required, and `❌` means the prop is optional.

---

## Events

To know status of files uploaded successfully or not, there is events that needs to be listened.

### How to listen to events example?

```vue
<template>
  <UppyCloudinaryUploader
    cloudName="your-cloud-name"
    preset="your-upload-preset"
    :tags="['gallery', 'profile']"
    buttonText="Upload Image"
    @uploaded="onUploadSuccess"
  />
</template>
<script setup>
const onUploadSuccess = (result) => {
  console.log('File uploaded:', result)
  if (result.failed.length > 0) {
    console.error('Errors:')
    result.failed.forEach((file) => {
      console.error(file.error)
    })
  }
}
</script>
```

## How to Use

```vue
<UppyCloudinaryUploader
  cloudName="your-cloud-name"
  preset="your-upload-preset"
  :tags="['gallery', 'profile']"
  buttonText="Upload Image"
/>
```

# Support Slot

```vue
Usage example
<UppyCloudinaryUploader
  cloudName="your-cloud-name"
  preset="your-upload-preset"
  :tags="['gallery', 'profile']"
  buttonText="Upload Image"
>
  <!-- <template v-slot:btn-icon>
        <b-icon icon="cloud-upload-alt"
        size="is-medium"></b-icon>
      </template> -->
</UppyCloudinaryUploader>
```

# Styling

This component uses Uppy’s styles, but you can override styles with your own CSS.
To include Uppy styles globally in your project, add this in your main.js or App.vue

```vue
import '@uppy/core/dist/style.css'; import '@uppy/dashboard/dist/style.css';
```

Or, you can include styles directly in your component:

```
<style>
.uppy-Dashboard {
  max-width: 600px;
}
</style>
```

Author: Ramesh Bhatta
GitHub: your-repo-link
NPM: npm-package-link
