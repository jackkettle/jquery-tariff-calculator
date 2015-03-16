jquery-tariff-calculator
=========
A moduler trampoline tariff calculator using jquery.

## Dependencies

- Jquery
- Bootstrap

## Installation and usage

1. Download the release in the following ways.
    - via **[Bower](http://bower.io/)**: by running `$ bower install jquery-tariff-calculator` from your console
    - [download the release](https://raw.githubusercontent.com/jackkettle/jquery-tariff-calculator/master/dist/jquery-tariff-calculator.js) (or [minified](https://raw.githubusercontent.com/jackkettle/jquery-tariff-calculator/master/dist/jquery-tariff-calculator.min.js))

2. Link to the relase in your html `<script type="text/javascript" src="bower_components/jquery-tariff-calculator/dist/jquery-tariff-calculator.min.js"></script>`
3. Choose the tag of your choice, in this case; `<div id="tc-main"></div>`
4. Initialise the tariff calculator with the following js
```html
<script>
$( document ).ready(function() {
  initTariffCalculator("#tc-main");
});
</script>
```
### Example code

```html
<!DOCTYPE html>
<html>
  <head>
    
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
    
    <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="jquery-tariff-calculator.min.js"></script>
    <script>
      $( document ).ready(function() {
        initTariffCalculator("#tc-main");
      });
    </script>
    
  </head>
  <body>
    
    <div class="container">
      <h2>Jquery Tramploine Tariff Calculator</h2>
      <div id="tc-main"></div>
    </div>
    
  </body>
</html>

```

### Example Plunker
http://plnkr.co/edit/bmCGJFXxbxijOnHQp644
