# react-curtain-reveal-box

> React Container for revealing/hiding conten with a curtain animation.

[![NPM](https://img.shields.io/npm/v/react-curtain-reveal-box.svg)](https://www.npmjs.com/package/react-curtain-reveal-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Hi! I created this react component since i couldnt find anything similar and wanted to share it with my fellow coders. The main idea is to have a Box which reveals its content onClick with a curtain animation. You can customise quite a lot of it, you can see a documentation of that down below. The react-curtain-reveal-box **depends on the width and height of its Parent**, so its easier to make responsive. 

# Dependencies

Since we are doing a lot of styling magic i used material-ui´s class generator, this will change in future updates since i think less dependencies are better, but keep this in mind while using it.

# Get Started

First just installed the package.

```bash
npm install --save react-curtain-reveal-box
```

Then just import and use the component. Just keep in mind the height and width fit to the Parent component. If you want to directly size it whithout a Parent, look at the second example please.

```jsx
<div style={{width:500,height:500}}>
    <CurtainRevealBox>
        <p>content</p>
    </CurtainRevealBox>
</div>
```

Here an example with custom configurations

```jsx
<div style={{width:500,height:500}}>
    <CurtainRevealBox
        onReveal={() => { console.log("revealed") }}
        onHide={() => { console.log("hide") }}
        styleConfig={{
            curtain: {
            borderRadius: 0,

            },
            leftPanel: {
            background: "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
            },
            rightPanel: {
            background: "linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
            },
            content: {
            backgroundColor: "rgba(34,193,195,1)"
            }
        }}
        animationConfig={{
            variant: "linear",
            speed: 5
        }}
        revealCheck={() => {
              return Math.random() <= 0.5;
            }}
        stayHidden={false}
        >
            <p>content</p>
    </CurtainRevealBox>
</div>
```

# Documentation

## General
| Name            | Type     | Default | Description                                                                                                                                                                                                                          |
|-----------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onReveal        | function |         | will be called on succesfull reveal                                                                                                                                                                                                  |
| onHide          | function |         | will be called on successfull hide                                                                                                                                                                                                   |
| revealCheck     | function |         | Will be called to check if the content should be revealed.  You can do whatever you want in this function, as long as you return true(show content) or false(dont show content). By default it will allways return true.             |
| isRevealed      | boolean  | false   | on true content will be shown                                                                                                                                                                                                        |
| stayHidden      | boolean  | true    | If false, the user will be able to hide the content again with a click.  But this comes with a downside at the moment, the content won´t be clickable or scrollable, since the clickable are stays rendered. I am working on a fix.  |
| animationConfig | object   |         | Animations settings of the curtain reveal/hide. See below for more details.                                                                                                                                                          |
| styleConfig     | object   |         | Style settings for the component. See below for more details.                                                                                                                                                                        |

## animationConfig
| Name    | Type   | Default    | Description                                                                                                                                    |
|---------|--------|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| variant | string | "ease-out" | Controlls the transition style of the curtain reveal/hide. Can be one of the following: [ 'ease' , 'linear' , 'ease-in' , 'ease-out' , 'ease-in-out' ].  |
| speed   | number | 1          | Controlls the duration of the reveal/hide animation.                                                                                           |
## styleConfig

| Name       | Type   | Default | Description                                                                      |
|------------|--------|---------|----------------------------------------------------------------------------------|
| curtain    | object |         | Style of the root curtain box.                                                   |
| leftPanel  | object |         | Style of the left Panel. duh.                                                    |
| rightPanel | object |         | Style of the right Panel.                                                        |
| content    | object |         | Style of the content box, this is where the children will be displayed.          |
| forbidden  | object |         | The styling of the curtain-box if the content reveal is denied(see checkReveal). |

# Author

I hope you find this Package usefull. If you find any bugs, things you dislike or even if you want to tell me what you do like feel free to email me at: h.ituerk@googlemail.com

# License

MIT © [chimeralevia](https://github.com/chimeralevia)


