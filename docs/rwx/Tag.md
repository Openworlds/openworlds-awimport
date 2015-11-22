# Tag
The Tag command is an RWX Command that sets the current tag value for a given clump in an avatar model.
### Usage
    Tag value

### Description
This command sets the numeric tag value of the current clump. Clump tags are different from surface tags used with the tag parameter of Active Worlds action commands such as the texture command and the animate command used to enhance building. For information about Surface Tags, see the QUAD, TRIANGLE, and POLYGON help pages. 
Clump tags are useful for identifying clumps so they can later be found by Active Worlds. Currently, the only use for clump tags in Active Worlds is to identify the various joints in animated avatars. They can also be used to create animated objects that will respond to sequences applied during the building process in world.

A list of tag numbers and limb names is at Skinned Avatars. All tag#'s can be used with jointed avatars as well. Keep in mind that the number of different limbs/joints used within a single avatar or object must not exceed 62 in total.

*Note*: Each clump may only be assigned one tag value at a time. Clump tag values higher than 42 are not supported in browser versions lower than 4.2, so be sure to test any avatar animation sequences you create which use these tag values. 
### Arguments
*value* is an integer tag value from the above table.
### Examples
```
.....
 clumpbegin
   tag 19
    protoinstance lu_leg
    transformbegin
    translate	-.0022	-.0454	.0024
 ....

```

