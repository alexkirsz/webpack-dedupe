import React from 'react';
import ReactWithAddons from 'react/addons';
console.log('react deduped:', global._React === React);
console.log('react/addons deduped:', global._ReactWithAddons === ReactWithAddons);
