// deletes `dist` and `.parcel-cache` folder
const { existsSync, rmSync } = require('fs');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const rmdir = dir => existsSync(dir) && rmSync(dir, { recursive: true });

rmdir(resolve(root, 'dist'));
rmdir(resolve(root, '.parcel-cache'));
