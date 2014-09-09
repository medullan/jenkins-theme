# Jenkins Custom Theme

This is a combination between the [Jenkins Atlassian](https://github.com/djonsson/jenkins-atlassian-theme)
Theme and the
[Rackspace](https://github.com/rackerlabs/canon-jenkins) Theme

## Installation

1. Install the [JQuery Plugin][jquery]

1. Install the [Simple Theme Plugin][simple]

1. Install the [Gravatar Plugin][gravatar]

1. Upload `theme.js`, `theme.css` and `jenkins_logo.png` to your web server

1. Click `Manage Jenkins`

1. Click `Configure System` and scroll down to `Theme`

1. Specify the URL for `theme.js` and `theme.css`.

1. Click `Save`

## Hosted installation
Skip step 4 and use these URLs in step 6:

**Master (Stable)**
- Hosted CSS: `http://medullan.github.io/jenkins-theme/theme.css`
- Hosted Javascript: `http://medullan.github.io/jenkins-theme/theme.js`


## Development

CSS & JS files are minified and compressed with Grunt. To prepare the environment:

```
npm install
grunt
```

This will generate the following files:
- dist/theme.css
- dist/theme.js

You can publish the files on gh-pages with the following command:

```
grunt deploy
```

And you can find the files at:

- `http://YOURUSER.github.io/jenkins-theme/theme.css`
- `http://YOURUSER.github.io/jenkins-theme/theme.js`

NB. This assumes you have already created a repository named `YOURUSER.github.io`
- replace `YOURUSER` with your actual github username or organisation name

## Compatibility
- JQuery plugin 1.7.2-1
- Simple Theme plugin 0.3
- Jenkins 1.579
- Gravatar plugin 2.1

If you are experiencing issues please let me know! Also, feel free to contribute!

[jquery]: https://wiki.jenkins-ci.org/display/JENKINS/jQuery+Plugin
[simple]: https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin
[gravatar]: https://wiki.jenkins-ci.org/display/JENKINS/Gravatar+plugin
