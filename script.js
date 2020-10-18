new Vue({
    el:'.app',
    data:{
        col:'red',
        i:'',
        s:'85% 70%',
        imag:'url("images/image0.jpg")',
        name:'images/',
        index:0,
        stl:'white',
        no:'0px',
        cclick:false,
        cll:'black',
        dmc:'black',
        dmstyle:'',
        link:'',
        link1:'',
        link2:'',
        link3:'',
    },
    methods:{
        right:function(){
            if (this.index<27){
                this.index++;
            }
            else if(this.index === 27){
                this.index=0;}
            
            this.imag=`url("images/image${this.index}.jpg")`;
        },
        left:function(){
            if (this.index===0){
                this.index=27;
            }
            else if(this.index>0){
                this.index--;
            }
            this.imag=`url("images/image${this.index}.jpg")`
        },
        style:function(){
                this.cclick = !(this.cclick);
            if (this.cclick){
                this.stl='black'
                this.no='19px'
                this.cll='white'
                this.dmc='white'
                this.dmstyle="secnav"
            }
            else{
                this.stl='white';
                this.no='0px';
                this.cll='rgb(150,150,150)';
                this.dmc='black';
                this.dmstyle="";
            }
        },
        l:function(){
            this.link="show"
            this.link1="no"
            this.link2="no"
            this.link3="no"
            console.log('link')
        },
        l1:function(){
            this.link='no'
            this.link1="show"
            this.link2="no"
            this.link3="no"
            console.log('link1')
        },
        l2:function(){
            this.link='no'
            this.link1="no"
            this.link2="show"
            this.link3="no"
            console.log('link2')
        },
        l3:function(){
            this.link='no'
            this.link1="no"
            this.link2="no"
            this.link3="show"
            console.log('link3')
        },
    
}})

//let hiligh=document.querySelector('.show');

//console.log(hiligh)
