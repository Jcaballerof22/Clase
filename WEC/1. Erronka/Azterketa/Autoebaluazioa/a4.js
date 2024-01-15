class kontua{

    constructor(titularra, zenbatekoa){
        this.titularra = titularra;
        this.zenbatekoa = zenbatekoa;
    }

    setTitularra(titularra){
        this.titularra = titularra;
    }

    getTitularra(){
        return this.titularra;
    }

    setZenbatekoa(zenbatekoa){
        this.zenbatekoa = zenbatekoa;
    }

    getZenbatekoa(){
        return this.zenbatekoa;
    }

    display(){
        console.log(this.zenbatekoa);
        console.log(this.titularra);
    }

    sartu(kantitatea){
        if (kantitatea>0){
            this.setZenbatekoa(this.zenbatekoa+kantitatea);
        }
    }

    kendu(kantitatea){
        if (this.zenbatekoa-kantitatea>0){
            this.setZenbatekoa(this.zenbatekoa-kantitatea);
        }
    }
}

var kontu1 = new kontua("Jon", 33);
var kontu2 = new kontua("Paco", 4000000);
console.log(kontu1.zenbatekoa);
kontu1.sartu(1);
console.log(kontu1.zenbatekoa);