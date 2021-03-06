<p align="center">
  <img src="https://github.com/Bombo01/Black-hole-ad-blocker/blob/master/images/blackhole_128.png" width="75" height="75"/>
</p>
<h1 align="center">Black hole</h1>

Black hole ad-blocker is an invisible ad-blocker created for Chromium-based browser (Brave, Chrome...).

> This project is currently under development, therefore it may not work as expected.

![Working_with](https://img.shields.io/badge/Working%20with-chromium-yellow?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Bombo01/Black-hole-ad-blocker?style=for-the-badge)
![Release](https://img.shields.io/badge/Release-1.0-success?style=for-the-badge)
![Blocked_sites](https://img.shields.io/badge/blocked%20sites-%3E%2043926-red?style=for-the-badge)

## Table of content

- [How it works](#how-it-works-hammer_and_wrench)
- [Install the preview](#install-the-preview-file_folder)
- [Making your blacklist](#making-your-blacklist-page_facing_up)
- [Blocked sites](#blocked-sites-no_entry)

## How it works :hammer_and_wrench:

When a request is made by the client it passes through the extension that redirects the sites in the blacklist to a non-existent one which, therefore, responds with an error, and the advertisement cannot load.

In this way, the sites fail to recognize this as an ad-blocker but simply as an internal error.

## Install the preview :file_folder:

Installing the preview is quite easy.

1. Download the source code and extract the folder
2. Go in [background.js](background.js) at line 3
```javascript 
  let url = chrome.runtime.getURL('data/blacklist_normal.json');
```
3. Edit `blacklist_normal.json` with your blacklist or keep this one
4. Go on your Chromium browser and open extensions settings as
    - `brave://extensions/`
    - `chrome://extensions/`
5. Enable developer mode
6. Click on Load Unpacked and select the folder (you probably have to reload the extension)
7. Now the extension is loaded.

## Making your blacklist :page_facing_up:

I created 2 file for you:
- [Normal](data/blacklist_normal.json) which blocks 43921 sites
- [Aggressive](data/blacklist_aggressive.json) which blocks 189416 sites

But you can make your own blacklist. It must be a json array like this:
```json
[
  "*://*.site1.tld/*",
  ...
]
```
I suggest you [this](https://firebog.net/) collection of blocklist.

I created a simple [java app](helper/helper.java) which you can use to create your own blocklist.  
You only need to create a file like [example.txt](helper/example.txt) and then running these commands:
```bash
  cd helper
  javac helper.java
  java helper example.txt
```
The output will be like [output.json](helper/output.json).

## Blocked sites :no_entry:

List of sites loaded: 
- Normal
   - [KAD host](https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADhosts.txt) updated on 13/07/2021
   - [Hosts](https://adaway.org/hosts.txt) updated on 13/07/2021
   - [Easy privacy](https://v.firebog.net/hosts/Easyprivacy.txt) updated on 13/07/2021
   - [Anti Malware host](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareHosts.txt) updated on 13/07/2021
- Aggressive
    - [KAD host](https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADhosts.txt) updated on 13/07/2021
    - [Hosts](https://adaway.org/hosts.txt) updated on 13/07/2021
    - [Easy privacy](https://v.firebog.net/hosts/Easyprivacy.txt) updated on 13/07/2021
    - [Anti Malware host](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareHosts.txt) updated on 13/07/2021
    - [add.Spam Host](https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Spam/hosts) updated on 13/07/2021
    - [AdGuard](https://v.firebog.net/hosts/AdguardDNS.txt) updated on 13/07/2021
    - [Admiral](https://v.firebog.net/hosts/Admiral.txt) updated on 13/07/2021
    - [AdServers](https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt) updated on 13/07/2021
    - [Prigent Ads](https://v.firebog.net/hosts/Prigent-Ads.txt) updated on 13/07/2021
    - [add.2o7Net Host](https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.2o7Net/hosts) updated on 13/07/2021
    - [Latest domain](https://osint.digitalside.it/Threat-Intel/lists/latestdomains.txt) updated on 13/07/2021
    - [Prigent Crypto](https://v.firebog.net/hosts/Prigent-Crypto.txt) updated on 13/07/2021
    - [Host browser](https://zerodot1.gitlab.io/CoinBlockerLists/hosts_browser) updated on 13/07/2021
