





```
📁 github
  📁 aliconnect

  📁 maxvankampen
  📁 schiphol-nl
    📁 schiphol-nl
      📁 schiphol-nl.github.io
      📁 station
        📁 dist
          📁 public
        📁 src
          📁 public

    📁 node_modules
      📁 @aliconnect
    📁 dist
      📁 sdk@0.0.1
    📁 src
      📁 sdk@0.0.1                # https://github.com/aliconnect/sdk
```


Setup project structure

```
📁 github
  📁 schiphol-nl
    📁 station-j2
```

```
📁 station-j2
  📁 .git
  📁 node_modules
  📁 src
  📁 public
```


```
npm i @aliconnect\sdk
```


```
mklink /D c:\aliconnect\fileshare\node_modules\@aliconnect\fileshare c:\github\aliconnect\fileshare\dist
```


php.ini
```
extension=php_fileinfo.dll
```




```
📁 node_modules
  📁 @aliconnect
    📁 font
      📁 public
        📁 css
        📁 fonts
    📁 vendor
      📁 public
        📁 js
      📁 php
    📁 sdk
      📁 public
        📁 css
        📁 js
      📁 php
```


IIS
```
📁 SRV (PC)
  📁 Sites
    📁 aliconnect
      📁 wiki
      📁 font             > C:\github\schiphol-nl\station-j2\node_modules\@aliconnect\font\public
      📁 sdk              > C:\github\schiphol-nl\station-j2\node_modules\@aliconnect\sdk\public
      📁 vendor           > C:\github\schiphol-nl\station-j2\node_modules\@aliconnect\vendor\public
```

IIS
```
📁 SRV (PC)
  📁 Sites
    📁 aliconnect
      📁 wiki
      📁 font             > C:\github\aliconnect\font\dist\public
      📁 sdk              > C:\github\aliconnect\sdk\src\public
      📁 vendor           > C:\github\aliconnect\vendor\dist\public
```




```
📁 SRV (PC)
  📁 Sites
    📁 aliconnect
      📁 wiki
      📁 sdk
      📁 font
      📁 vendor           > C:\github\aliconnect\vendor\dist\public
```






IIS

```
📁 Default Web Site
  📁 sdk                       > \github
```
