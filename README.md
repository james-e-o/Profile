ISSUES ENCOUNTERED AND WAYS I BYPASSED THEM

- TAILWIND PREFLIGHT
- MOBILE 100VH PROBLEM WITH BACKGROUND GRADIENT

- UPDATING AN ELEMENT'S CLASS PROPERTY WITH A NEW VALUE FROM CLASSLIST.ADD
the specificity rule for this in tailwind is similar to vanilla css. inline classes usually have a higher preference
when there is a conflict of values between classes, so they will always override any additional class, and in the case of a style-sheet, the class that comes after, takes precedenmce s. in tailwind if you decide to use the global.css stylesheet, you will have to use a class selector(not id selector)[line-17-global.css(.link-container)] as the initial class, then when you classlist.toggle/add a new class[line-17-global.css(.popbox)], it will override the preexisting class.
better still, using javascript to update a class is a preferred standard.