
export default class StringGenerate {

    constructor() {
        this.vocals = 'a,e,i,o,u,y'.split(',');
        this.consonants = 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,z'.split(',');
    }

    syllables(length = 6) {
        let str = '';
        new Array(length).fill(0).forEach((n, i) => {
            str += i % 2
                ? this.vocals[StringGenerate.numBetween(0, 5)]
                : this.consonants[StringGenerate.numBetween(0, 19)];
        });
        return str
    }

    static numBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static RGB() {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
}
