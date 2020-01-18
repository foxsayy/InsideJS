var arr = ['zero', 'one', 'two'];
arr.color = 'blue';
arr.name = 'number_array';

for (var prop in arr) {
    console.log(prop, arr[prop]);
};

// 0 zero
// 1 one
// 2 two
// color blue
// name number_array


for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}

// 0 'zero'
// 1 'one'
// 2 'two'