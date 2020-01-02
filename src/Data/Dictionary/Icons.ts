//     Copyright (C) 2018 Christopher David Ramos
/* tslint:disable:max-line-length */
/* tslint:disable:object-literal-sort-keys */
export class DictionaryIcons {
  UI: IDictionaryIconsUI
  WX

  constructor() {
    this.UI = {
      IMG_BARS: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABHRSTlMAR+Ljkw3fcwAAADZJREFUSMdjYBgFgwoIu2AFhnAFJtgVOMEVuOAA9FRA0JFC2BUojiaA0fQwmh5G08NoehgaAAA2/pbKdFNyqQAAAABJRU5ErkJggg==",
      IMG_QUESTIONMARK: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABC0lEQVRYhe3UsS4EURSH8R+724kH0BE1z6DRabYXxVY6ncITaLSeQqKSbKHRiw7RyNJoiEQoCKOY3Vjj7s5gZkJyv+QUc+/kfP85c3OJRCLfp4EV7OEMT7jHETYwVaV8DidIxtRNP2DpLOIuRz6oV6yWKZ/GRUH5oB4xn9e4UTDAWr+GSaT/vYsHzGb2W2jioKBjLC3s4M3HF65n3un4OoXTMuTDtHGLzcDeTCDAddkBYDKw1sRuIMBhFQGyLEtHHTqInarlWyPECfalk6mM9gjxC7alB7dSQjfiJRaqFg94DgRYqksO5xn5cZ3yP0HP5wn0ftJk4hcBkjL6hW61WvnXAa5yniORSCHeAQF2bHCORerhAAAAAElFTkSuQmCC",
      IMG_LOGO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAAnNCSVQICFXsRgQAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAACu0lEQVRIx52VS2xMYRTHj0pVvKPqsSAUC41XgngvxStCok0lLIidd2IhiGBRsRESQbHQLojYSIRISCRivO/M6HR0Gg3KdP7TViw0jceE/izmzvS27q1yzuZ+j9//y/nOPecz87FPw1ObdEkv1K6MMmrXc11MVbYPs/5Ycpouq1P4eKcutU3tE34/OH1SGV845xmdaCoKwNtKFe0TznmodawP3jpL6X7hCDWny/48Xf3GsxIlHrypSOF/whEKvR6UF1DVP+OI1PFc9FP0438E9E2Tsuef/y+cFhIhM9MQdWQnjrCBpLt4nXXU5rdWsN8HryPSlSi2dHlu6jDGffd7I8Zq9/sxxu7e8VOPg0PDSU8AdzGq3OUSJjGcDwhxBuNGL4EEDg4O8ailnuYmk4xkA0Lcw6jGuIkQmymimp08R4in7OSqizvUdZjaunVXMQEhDlJMC5PZixDTWUaEUSwlRYrljOdBXiDy0/S9W6AKw0EsphyxlTmIBgZwEHEW4xRVFHAhjzuEMW/1PcS4wBsKOYuooYB6ajFuI8RaRjCMLR48K/DZeznj2EYNBcQQTRRyjl2McJP7hAEMIdRDIPrLFPEKlDOTrcx2R0uoYCEr3VElQylgRw+BV52mWq/AaQYygT3u6BAlFLmpvYJxjEoKueYRqE9YaptXwMHy6cum03iIiDOGBbwkxERKeZIXSFRbcnTPUlrBfPcHEimWsAwh9lHGLRwcqpnB0fwVNk4xM934W9m86xF3t8ffZ6txnrr6wpsJ++JhGlflGkpNMP6RSND58XxHailWMqjmowF4NBMr9fbkRfrq07SIBeBhXlf06svpNX++R/FAvOGA36M2W81+Nd/bIz8btge8Te3jdSeHvwnAY61NZdaXpdfqmXjrC9d1NB6w/ljL3MSD2Jfu7Ee6Yl/ijxrX++39DfSjxGu98NLHAAAAAElFTkSuQmCC",
      IMG_ERROR: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVQ4jc2SQQ7CMAwEpxXQPwAP4UmBX3JpK/gAH6gEl5YT4gaHuJK1TQonxEorJVl77cSBf0QF7IEWGIwNEEybxRY4A68MT8BmrrJP7oDC2IlJspODVLs67SZaSBm0EjQ47S5anTIYJOjhtKdo/SiUKSfDeM8CWOWCFm59AXZuXwJHZ4LEThCYjm1p1PPkI1bEEX0yyI4R4idRE01e55J9J4E4qt5Y8+VX/j3eoNZOiEf5zGAAAAAASUVORK5CYII=",
      IMG_INFO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABcUlEQVRYhe2WMU7DMBSGP2AGofQADXTnChyjCHIBdgpX6MJaTgCFEyAxwRnKjJAQY0EtEl3awOAYguXYzyaZ2l96UuTY7312XvwerLTsWguc3wG6wD6wB2wX4+/ACLgHboCnmvh+lAJDYAF8eWwBXAFtiWPJCWTAANg0xi+AafG8BRwb7z+KsUsJSJVOgRz7Tk3Z5uRALzZ45gguBdAQR6HBU9Txur51UpqfeOZOEeaE1rXHYYyJc6GDLNtDbQ7smMHWLQDdinGtFurvKVtLsLGNwrdXd7h3UiXJKdxKAF4bBHiRAMw8Ts6Bs0iAWR0AofdA2T7NRbZke5NQRmosAXhsEGAkAXhoEEDkexf3RTQA+pZ1/eKd6yJKpaRDhyOf/n0VgyockxoBJgQWI1Al1FaOE8caW1XMgcPQ4Fq9Cgip5cBJbHCtDH9vUHXs0Ts31UY1mpIyPUclnOibh7blKXDAb1uu82HM37b8OdDvSkusb5xBINtoXDlRAAAAAElFTkSuQmCC",
      IMG_COG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACPElEQVRYheWWMWtUQRDHf7mkODQXzDUBOZMIEYu0KW3UIneoSYifwlqIYiWEFBZqJSLET6GEy3eIkM4zRhMIAW3UQhDEu1jMvLx5e7v77l7uqvxhYd/Mf3dm38zODpx3jA5p3zKwBlwAvqisDtwHPgD/hmT3FLvACfAbmAeuAz9Vtjts4wBv1ZhvbFpiaUgOvIvo3hfZ8Jj0BEcRXgN4BOwotwnUdDRVtqOceszgjJlP0f0bp4x+1sxdXs3ornj0XSEoIfE7ANb1e8Hj4AIwBmwAX4EXwEjsRInBPLx2PNwH2h7P2+qklT0DFpHrl4RgizQEW6QhWFNuBlcDxnodf4Gq7rUS4a1YozYEyW8visfAD53fjfBiOkrAZ7IefwSWgHEdy0DL4eyRzQG3EM3rPFqIpoFVoOMYv+ThTjpOdJBrlXDLwBPkWiZoqKzsM/4Nf7yWQt4if8K3Zj+yJohQwoxH1lQi63rGWUpx3r3vy4G9gP52ZO2tgPx7UWcmkOJgk7CFJJyLSeAT2SRcRRIZ0iS0xaaOvAHeJEwwQvcVayEJV9Gx7Bg/Qa6uDWfhfuAh4cTKG0/NPpsRXqYfsKgi5bSoA23Sl7HnUmx7wj/AReCGkR0iueFmfAfp9apG9gr4hfR9D4DLwDZwE3iJhGIOuIbkUIVAzXiuBjaQJ/eO5xQNJObryn2j3y4vtx8IYdbM8xqSGTOPOVDrxwEXR2bRcYR3pn5gkCjUDwwS9yK6aD8wKBTqBwaJvvuB84v/w0kaHpgQ2mwAAAAASUVORK5CYII=",
    }
  }
}
