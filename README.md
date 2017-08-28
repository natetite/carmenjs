<h1>Carmen Finder</h1>
<h2>Where ... In the world is ______________ ? </h2>
<p>Carmen is a Spotlike search UI modal. When carmen is invoked, a familiar global search modal appears in the middle of the screen. Triggering another one replaces the previous carmen modal so they don't stack up. Tab out (any onblur method will work) to remove it.</p>

Fast and dirty, this is a proof of concept.
It's completely encapsulated so no external CSS is needed, however, a global styling reset/normalize CSS file is a good idea. Invoking the Carmen Search is as easy as:

```
new Carmen()
```

Easy peasy, lemon squeezy.

Each time Carmen is started, she replaces her former self so things don't get out of hand. 
