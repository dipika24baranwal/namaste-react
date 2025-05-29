# Namaste React

# Parcel https://parceljs.org/
    - Dev build
    - Local server
    - HMR: Hot Module replacement
    - File watching algorithm - written in C++
    - Caching: Faster Builds caching build in .parcel-cache folder
    - Image Optimization
    - Minification
    - Bundling
    - Compress
    - Content Hashing:  
    - Code splitting
    - Differential Bundling: Support older browsers
    - Diagnostic: give error properly
    - Error Handling
    - Host on https
    - Tree shaking: remove unused code
    - Different dev and prod bundles
    

# Restaurant

 * -Header
 *  -Logo
 *  -Nav Menu
 * -Body
 *  -Search
 *  -RestuarantContainer
 *  -Restuarant Card
 * -Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 

# type of Export/Import
  -Default Export/Import
   export default Component
   import Component from "Path"

  -Named Export/Import
   export const Component
   import {Component} from "Path"

# React Hooks
    {Normal JS utility function}
    -useState : Superpowerful state variable of React
    -useEffect : Will be called whenever component render/re-render
        -If we don't pass any dependency array : useEffect(()=>{})
            => useEffect will be called everytime compenent renders
        -If we pass empty dependency array : useEffect(()=> {}, [])
            => useEffect will be called on initial component render(just once)
        -If we pass any value to dependency array: useEffect(()=>{}, [btnNameReact])
            => useEffect will be called when dependecy array value changes.

# Types of Routing in web application
    -Client side routing
    -Server side routing