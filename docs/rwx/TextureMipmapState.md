# TextureMipmapState
### Usage
    TextureMipmapState value
### Description
Specifies whether or not all textures following this command should be mipmapped. By default, mipmaps are on. 
Note that since textures are shared between objects, the mipmap state of a particular texture is global. In other words, a single texture cannot appear both mipmapped and non-mipmapped at the same time in a world, neither on the same object nor across different objects. 
### Arguments
*value* is either *On* or *Off*
### Examples
    TextureMipmapState Off # Turns off Mipmap for the current material
