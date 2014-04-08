less-bootstrap-3
================

For my [stylesheet boiler](https://github.com/DerMambo/stylesheets.git) and created for my blogpost:

[Meteorjs and Twitter Bootstrap - The Right Way](www.manuel-schoebel.com/blog/meteorjs-and-twitter-bootstrap---the-right-way)


###Use Without Stylesheet Boiler
If you want to use this package for bootstrap less you have to some additional, simple steps:

**1. Add the less compiler**
    
    meteor add less

**2. Copy the fonts**

    // from
    packages/less-bootstrap-3/lib/fonts/
    // to
    public/fonts/

**3. Make sure you have an importing main style.less file**

    // style.less file
    @import 'packages/less-bootstrap-3/lib/less/bootstrap.import.less';
