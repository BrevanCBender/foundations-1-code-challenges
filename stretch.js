// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    const arrayOfNamesandPrice = [];
    arr.forEach(element => arrayOfNamesandPrice.push(element.id, element.price));
    return arrayOfNamesandPrice.sort('Id'); 
   // return arr.sort((a, b) => parseFloat(a.key) - parseFloat(b.key));
}
    
    /*reduce((accumulate, currentValue)=>{
        console.log(accumulate, currentValue);
        return {
            ...accumulate,
            [currentValue.id]: currentValue.price
        };
    });*/


/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    return arr.reduce((accumulate, currentValue) => {
        // object[property_name]
        accumulate[currentValue.id] = currentValue;
        return accumulate;
    });
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    return arr.reduce((accumulate, currentValue) => {
        accumulate[currentValue.category] = (accumulate[currentValue.category] || 0) + 1;
        return accumulate;
    }, {});
}
