---
layout: posts
title: Hands on with a couple of assistive tools to better understand what makes a website accessible
---

I remember sitting down and reading my first XHMTL and CSS tutorial, which stated the benefit screen readers would get from semantic markup and CSS layouts. This was a long time ago, when the web standards movement was just getting started and nested tables used for layout were the norm.

Over the years I'd read about good techniques and practices that I was under the impression helped assistive tools such as screen readers or screen magnifiers. Untill recently I hadn't actually used any of these technologies, and I found using a screen reader to be really insightful. I am going to give you a quick run down of two free tools that anyone can try out and get a feel for.

I would highly recommend moving your monitor so that you can't see it, or if you are using a laptop use an external keyboard. Without being able to see the screen, you immediately notice how useless the mouse has become. So whilst using a screen reader you will need to learn some keyboard shortcuts.

## VoiceOver on MacOS X

MacOS X comes with a highly regarded integrated suite of assistive tools. [VoiceOver](http://www.apple.com/accessibility/voiceover) is the screen reader and will work with any piece of Mac software. 

### Basic usage

To enable VoiceOver type `cmd + f5` and at the dialog hit `enter` or alternatively you can follow the VoiceOver tutorial before you start. I would highly recommend spending the time doing the tutorial, but I will run you through just enough to navigate a website below.

VoiceOver gives us a multitude of keyboard shortcuts to navigate your Mac in a way that would normally require the use of a mouse. Luckily most VoiceOver shortcuts are based on the same set of keypresses - Control (`ctrl`), Option (`alt`) and other keys are pressed at once. For example `ctrl + alt + d` selects the dock, and you can use the arrow keys on the keyboard to navigate to other items in the dock. VoiceOver will read out the application or folder names as you select them. When you have one selected you can use `enter` to open your selection.

To open Safari hold `ctrl + alt` whilst tapping `m` three times and this will open spotlight. Next, type `safari` and use the `up` and `down` arrows to highlight the application and tap `enter` to open it.

Press `cmd + l` to get to the address bar and type `bbc.co.uk/news` followed by `enter`. VoiceOver will go into an automatic read of the entire page, the first thing you may notice if you are <strike>cheating</strike> watching the screen is that it's reading out text that's not on the screen! This technique has been around for years and by placing visually hidden links like this you can allow screenreader users to quickly jump to the important sections of the page.

You can navigate the page using the VoiceOver keyboard shortcuts. This time `ctrl + alt` with the left and right arrow keys, enable you to move through page elements in the order they are in your HTML.`Ctrl + alt + space` allows you to select the item you are on, which is almost like clicking on that item. When you scroll around the page in this manner it will stop VoiceOver from auto-reading the whole page. You can restart it with `ctrl + alt + a` and VoiceOver will carry on reading from the currently selected item.

### Web Rotor

The Web Rotor is a very handy feature of VoiceOver, which makes browsing the web tremendously easy. It groups similar elements together so that you can cycle through them and quickly jump around the content to find what you are browsing for.
To open up the Web Rotor press `ctrl + alt + u`, this will bring up lists of similar elements. Pressing the left and right arrows will cycle through element types. Including links, headings, form controls, etc. Whilst the up and down arrows will select the elements in this group, pressing enter will close the Web Rotor and continue normally browsing from the element you have just selected.

### Web Spots

VoiceOver tries to select important elements of the page with a feature called Web Spots. When the page loads, it groups these elements so that you can cycle through the different spots using `ctrl + alt + cmd + n` to select the next one, or `ctrl + alt + cmd + shift + n` for the preivous one. Web Spots will purposefully miss out elements and in doing so will speed up your navigation of the page. You can still use the normal VoiceOver keyboard shortcuts to select elements close to the Web Spots (`ctrl + alt + arrows`).

### Keyboard shortcuts:

* Enable/disable: `cmd + f5`
* Open a web page in safari: `cmd + l`
* Navigate page elements: `ctrl + alt + (left or right)`
* Select current element (click): `ctrl + alt + space`
* Start reading the rest of the page aloud: `ctrl + alt + a`
* Open the Web Rotor: `ctrl + alt + u`
* Move between Web Spots: `ctrl + alt + cmd + n` (forward) and `ctrl + alt + cmd + shift + n` (backward)


## NVDA on Windows

[NonVisual Desktop Access (NVDA)](http://www.nvda-project.org) is a free and open source screen reader for Microsoft Windows. It is full featured and will work with most software for Windows, as well as being highly compatible with the operating system GUI. If you want to give it a try you can jump straight to the [download page](http://www.nvda-project.org/wiki/Download) and use the installer.

I used Windows 7 inside a [VirtualBox](https://www.virtualbox.org) VM on my Mac and had difficulty with the NVDA modifier key. The `capslock` key presses were 
unreliably received by the host OS so I used [SharpKeys](http://www.howtogeek.com/howto/windows-vista/map-any-key-to-any-key-on-windows-xp-vista) to remap the `§` key to `capslock`.

### Basic usage

Once NVDA is installed and running it will greet you with the welcome message. At this point you can opt to use the `capslock` key as an NVDA modifier key - otherwise it will default to the `insert` key. You can use the `tab` key to cycle  through the options and `space` to toggle them on or off. When you are finished you can select `OK` and press `enter`.

The NVDA modifier key is used in combination with other keys to form NVDA specific commands. For example `NVDA + n` will open the application's menu and using the arrow keys we can explore the menu options. As each is selected they will be read aloud and from this menu you can change preferences or access tools and help. 

If you are using a laptop you will need to change the keyboard settings. Choose the first item in the menu by pressing the `down` arrow then hitting `enter`. From this submenu select the fifth item `Keyboard settings` again using the arrow keys and `enter`. As you move from one menu item to another you will notice that it will read the item's name and then a single letter, this is a shortcut to that menu item. The first item you can `tab` to is select box where `laptop` can be selected. You can also change the NVDA modifier key here. Again we need to use the `tab` key to cycle through items and `space` to toggle them. `Enter` will select `OK` and `esc` will close the window without saving anything.

To open firefox we will need to open the start menu. Use the `win` key (if you're on a mac `ctrl + esc` works just the same) and type out `firefox` hitting `enter` to open Firefox. We can use `ctrl + l` to focus the url bar and type `bbc.co.uk/news` opening the page with `enter`. To start a full page read from the top you can use `NVDA + down` and to stop it at any time, just tap `ctrl`. You can scroll through elements on the page with `tab` or scroll backwards with `ctrl + tab`. To interact with the current element you can use `space`.

### Single letter navigation

To speed up navigation of the page you can cycle through certain types of element. Pressing `h` will find the next available heading, whilst pressing `k` will find the next available link or `f` will find the next form element. [Here is a complete of list keys](http://www.nvda-project.org/documentation/userGuide.html#toc32). If the single letter navigation is not working you may have disabled browse mode, you can turn it back on again with `NVDA + space`.

### The elements list

Another navigational aid is the elements. You can open it by pressing `NVDA + f7`. This lists links, headings and ARIA landmarks. When first opened the links will be selected and you can scroll through these elements using the `up` and `down` arrows to listen to the link text. When you find the one you want you can press `enter` and it will open that link. To select the headings elements you can press `alt + h`, to select landmarks use `alt + d` or to return to links use `alt + k`. When you select an individual header or landmark and press `enter` it will jump the page to that section and start reading. 

### Keyboard shorcuts

The majority of navigation relies on native Windows keyboard shortcuts:

* `win` to open the start menu where you can navigate with the arrow keys and use `enter` to launch
* `alt + tab` to switch between open windows
* `tab` and `shift + tab` to cycle through items in the focused window
* `space` to toggle items that are selected
* `alt` to reach the menubar of an application, from here you can use the arrow keys or direct keyboard shortcuts (`f` for File, `e` for Edit, etc)

NVDA specific shortcuts

* `NVDA + n` will open the NVDA application menu
* `NVDA + tab` will tell you which window has focus
* `NVDA + down arrow` to start reading and `ctrl` to stop
* `NVDA + space` to switch between browse and focus mode
* `h` for the next heading
* `k` for the next link
* `f` for the next form element
* `NVDA + f7` for the elements list

## Things to keep in mind

Using a screen reader means relying on keyboard shortcuts. Techniques like [hidden jump to links](http://html5boilerplate.com/html5boilerplate-site/built/en_US/docs/css/#visuallyhidden-) and [access keys](http://www.webdesigncreare.co.uk/blog/videos/accesskeys.html) will really aid navigation of large pages.

One thing that I hadn't picked up until writing this post is how language can have quite an impact on accessibility. I always dread using 'click here' and 'view more' for links because the text doesn't explain what it is. But when a screen reader user hops around the page scrolling from link to link this text is useless. Without the visual context of elements surrounding them the user has no idea where these links are going and they may need to waste time scrolling through the sorrounding content.

HTML5 semantics and WAI-ARIA both will play a large part in future assistive technologies. Thankfully a lot of work has already been done and many incorporate them now - I plan on doing a follow up post on this very topic.

Finally there is more to accessibility than screen readers. People with disabilities are enabled by a wide range of assistive technologies such as screen magnifiers, braile displays or hearing aids. We need to also keep in mind things like:

* that layouts can be zoomed
* there is enough contrast between text and it's background
* not relying heavily on text shadow for ledgibility
* supplying transcripts for video and audio files

If you would like to know more, or don't have time to try out the software yourself there's some really good videos from Yahoo that you may find useful:

* [Victor Tsaran: An Introduction to Screen Readers](http://youtu.be/izrC4R7SsH4)
* [Karo Caran and Victor Tsaran: Introduction to Screen Magnifiers](http://youtu.be/-VoCvUi4Mrg)
