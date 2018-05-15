var MyApp = san.defineComponent({
    template: '<div><p>Hello World.</p><div class="sub-info">With <a href="{{parcel.url}}">{{parcel.name}}</a> & <a ' +
    'href="{{san.url}}">{{san.name}}</a></div></div>',
    initData: function () {
        return {
            san: {
                name: 'san',
                url: 'https://baidu.github.io/san/'
            },
            parcel: {
                name: 'parcel',
                url: 'http://www.css88.com/doc/parcel/'
            }
        }
    }
});

var myApp = new MyApp();
myApp.attach(document.body);
