


function biggie_size(n) {
return n + 4;
}

function unbiggie_size(n) {
return n - 4;
}

function is_biggie_size(n) {
return n > 4?
true
: false;
} 

function combo_price(n) {
return n > 4?
n * 1.17
: (n * 1.17) + 0.5;
}

function empty_order(){
    return 0;
}

function add_to_order(order, item){
    return order*10+item;
}

function last_combo(order){
    return order>=10
    ? last_combo(order - 10)
    : order;
    
}

function other_combos(order){
    return (order - last_combo(order))/10;
}


other_combos(34363);
