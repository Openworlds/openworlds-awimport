# RemoveTextureMode
### Usage
    RemoveTextureMode value
### Description
This command removes the specified mode from the set of texture modes of the current clump. The mode can be either lit, foreshorten, or filter, however beginning with version 3.0, Activeworlds now only supports the lit texture mode.
### Arguments
*value* is the mode to remove and  lit is the only possible value. Other values will be ignored. 
### Examples
    RemoveTextureMode lit # This is equivalent to 'TextureMode null'
