// USER INPUTS
var qLirio = localStorage.getItem('cantidadLirio');
var chipMethod = localStorage.getItem('chipMethod');
var products = localStorage.getItem('products').split(',');
var percents = localStorage.getItem('percents').split(',');
var sellOption = localStorage.getItem('metodoVentaSecado');
var prices = localStorage.getItem('prices').split(',');

var names = ['Lombricomposta', 'Secado', 'Biogás', 'Composta', 'Cosecha', 'Molido','Adicional']
var user_inputs = [qLirio, chipMethod,products,percents,sellOption,prices]

//OUTPUTS initialization
var output = {
    0 : {               //lombri
        surface : [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest : [
            ['Total',0]
        ],  
        gain : 0,
        prod : 0
    },
    1 : {               //secado
        surface : [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest : [
            ['Total',0]
        ],  
        gain : 0,
        prod : 0
    },
    2 : {                //gas
        surface : [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest : [
            ['Total',0]
        ],  
        gain : 0,
        prod : 0
    },
    3 : {               //compost
        surface : [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest : [
            ['Total',0]
        ],  
        gain : 0,
        prod : 0
    },
    4 : {               //harvest
        surface: [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest: [
            ['Total',0]
        ] 
    },
    5 : {               //chipping
        surface : [
            ['Total',0]
        ],  
        hours : [
            ['Total',0]
        ],  
        invest : [
            ['Total',0]
        ]  
    },
    
    6 : {                   //valores adicionales
        surface : [
            ['Espacios de circulación, almacenamiento, ...',0]
        ],                  //superficies de circulacion...
        hours :[
            ['Horas de descanso, limpieza, mantenimiento, ...',0]
        ],                  //horas de descanso, limpieza...
        invest : 0,
        gain : 0,
        prod : 0
    },
    
    total : {
        surface : 0,
        hours : 0,
        invest : 0,
        gain : 0,
        prod : 0
    }
     
}

// FUNCTIONS

function fHarvest(quantity,performance) {  //add investment
    let hours = quantity / performance
    output[4].surface[0][1] = 0
    output[4].hours[0][1] = hours
    output[4].invest[0][1] = 0
}
fHarvest(qLirio,dataHarvest.harvestYield)


function fChipper(chipMethod,quantity_input) {
   if(chipMethod == 'hand') {
       var performance = dataChipping.manualYield;
       output[5].invest[0][1] = 0
   }
    else {
        var performance = dataChipping.chipperYield;
        var invest = dataChipping.price;
        output[5].invest.push(['Molino', invest, 1])
        output[5].invest[0][1] = invest
    }
    let hours = quantity_input / performance
    
    output[5].surface[0][1] = dataChipping.surface
    output[5].hours[0][1] = hours 
}

fChipper(chipMethod,qLirio)



function fLombri(proportionLombri,sellingPrice){
     
    //1st step : Pre-compost
     let qinput1 = qLirio * proportionLombri
     let volInput1 = qinput1/dataChipping.chippedwhDensity
     let boxNumber = Math.ceil(qinput1 / 300) * 3  //3 boxes of 1m3 for every 300kg
     let surface1 = boxNumber * 2     //con area de trabajo
   
     
    //2nd step Lombri-Compost:
    let qinput2 = qinput1 * dataLombri.massLossPrecompost
    let volInput2 = qinput2 / dataLombri.compostDensity
    let surface2 = (qinput1 *18/300) * 2 // you need 18m2 for every 300kg/semana, mas el pasillo
    

    //3rd step : Drying and harvesting
    let surface3 = 4 //m2
    let production = qinput2 * 4 * dataLombri.massLossCompost
    
    
    //Surface
    output[0].surface.push(['Cajas de pre-compost', surface1 ] )
    output[0].surface.push(['Camas de lombrices', surface2])
    output[0].surface.push(['Secado y tamiz' ,  surface3 ])
    output[0].surface[0][1]= surface1 + surface2 + surface3
    
    //Working hours
    let h1 = dataLombri.hours.fillPrecompost /60 * volInput1,
        h2 = dataLombri.hours.movePrecompost / 60 * volInput1 * (2/3+1/2),
        h3 = dataLombri.hours.fillLombricompost /60 *volInput2,
        h4 = dataLombri.hours.dry / 60 /4  ,         // once a month
        h5 = dataLombri.hours.cribble /60 * production /4 ;
    
    output[0].hours.push(['Llenar precomposteadores' , h1 ]) 
    output[0].hours.push(['Remover precomposteadores', h2 ])
    output[0].hours.push(['Llenar cama de lombrices' , h3]);
    output[0].hours.push(['Secar' , h4 ])  
    output[0].hours.push(['Tamizar' , h5 ]) 
    output[0].hours[0][1] = h1 + h2 + h3 + h4 + h5 ; 
    
    //Investments
    let i1 = dataLombri.prices.preCompostBox * boxNumber,
        i2 = dataLombri.prices.LombriBed * surface2/2,
        i3 = dataLombri.prices.cribble ;
    
    output[0].invest.push(['Cajas de pre-compost', i1, boxNumber ])
    output[0].invest.push(['Camas de lombrices', i2, Math.round(surface2/2) + ' m²'])
    output[0].invest.push(['Tamiz' , i3, 1 ])
    output[0].invest[0][1] = i1 + i2 + i3
    
    //Production , gain
    output[0].prod = production*12 //per year
    output[0].gain = production * 12 * sellingPrice //per year
    
}

if (products[0] == 'true') { fLombri(percents[0],prices[0]) }



function fDrying(proportionDrying, sellOption, sellingPrice) {  //5 dias para secar
    let qInput = qLirio * percents[1]
    let boardSurface = qInput / dataDrying.whBoardDensity//superficie de las charolas
    let useSurface = (boardSurface * 2) / 2 //2 niveles de charolas
    let prod = qInput * dataDrying.massLoss * 4 * 12 //per year
   
    //Surface
    output[1].surface.push(['Secador', useSurface])
    output[1].surface[0][1] = useSurface
    
    //Working hours    
    let h1 = qInput / dataDrying.hours.fillDryer 
    let h2 = qInput * dataDrying.massLoss / dataDrying.hours.emptyDryer
    output[1].hours.push(['Llenar secador', h1])
    output[1].hours.push(['Vaciar secador', h2])
    output[1].hours[0][1] = h1 + h2
    
    //Production
    output[1].prod = prod
    
    //Investments
    let i1 = dataDrying.invest.house*useSurface
    let i2 = dataDrying.invest.grinder
  
    if(sellOption == 'rough') {
        output[1].invest.push(['Secador', i1, Math.round(useSurface) + ' m²' ])
        output[1].invest[0][1] = i1
    }
    else {
        output[1].invest.push(['Secador', i1, Math.round(useSurface) + ' m²' ])
        output[1].invest.push(['Molino fino', i2, 1])
        output[1].invest[0][1] = i1 + i2
    }
   
    //Gains
    output[1].gain = prod * sellingPrice
}

if (products[1] == 'true') { fDrying( percents[1], sellOption, prices[1] ) }


function fGas(proportionGas,sellingPrice){

    let qInput = qLirio * proportionGas
    let liquidVolume = qInput * 0.8,
        solidMass = qInput * 0.2,
        rhaleVolume= (qInput * dataGas.RhaleCapacity) / 5,
        uasbVolume = (qInput * dataGas.UasbCapacity) / 5 ;
    
    //Production
    let volumeProduction = (uasbVolume * dataGas.UasbYield * 30) / 1000,  //m3/mes
        energyProduction = volumeProduction * dataGas.biogasHeatingCapacity ; //kWh/mes
    output[2].prod = energyProduction * 12 //kWh/ano
                               
    
    //Surface
    let s1 = dataGas.surface.extractor,
        s2 = (rhaleVolume + uasbVolume)/1000/1*4,
        s3 = volumeProduction/2
    
    output[2].surface.push(['Extractor de líquidos', s1]) 
    output[2].surface.push(['Reactores', s2])
    output[2].surface.push(['Bolsa de gás', s3])
    output[2].surface[0][1] = s1 + s2 + s3
    
    //Working hours
    let h1 = qInput / dataGas.hours.liquidExtraction 
    let h2 = qInput * dataGas.hours.feedRHALE / 60 
    let h3 = qInput * dataGas.hours.feedUASB/60 ;
    
    output[2].hours.push(['Extraer líquido', h1]) 
    output[2].hours.push(['Llenar RHALE', h2])
    output[2].hours.push(['LLenar UASB',h3])
    output[2].hours[0][1] = h1 + h2 + h3
    
    //Investments
    let i1 = dataGas.invest.liquidExtractor 
    let i2 = dataGas.invest.rhale 
    let i3 = dataGas.invest.uasb 
    let i4 = dataGas.invest.tent
    let i5 = dataGas.invest.gasBag
    
    output[2].invest.push(['Extractor de líquidos',i1, 1])
    output[2].invest.push(['Reactor RHALE',i2, 1])
    output[2].invest.push(['Reactor UASB', i3, 1 ])
    output[2].invest.push(['Carpa de protección',i4, 1])
    output[2].invest.push(['Bolsa de gás',i5, 1])
    output[2].invest[0][1] = i1 + i2 + i3 + i4 + i5
    
   
    //Gains
    let gain = sellingPrice * energyProduction * 12
    output[2].gain = gain
}

if(products[2]=='true') { fGas(percents[2],prices[2]) }

function fCompost(proportion, sellingPrice) {
    let qInput = qLirio * proportion,
        volInput = qInput / dataChipping.chippedwhDensity,
        compostingUnits = Math.round(qInput / 300),
        boxNumber = compostingUnits * 5,
        prod = (qInput * 4) * dataCompost.massLoss , //per month
        prodVolume = prod / dataCompost.compostDensity;
    
    //Surface
    let surface = boxNumber * 1 * 2 // m2 (con el espacio de circulacion)
    output[3].surface.push(['Composteadores',surface])
    output[3].surface[0][1] = surface
    
    //Working hours
    let h1 = dataCompost.hours.fillBox * volInput / 60,
        h2 = dataCompost.hours.moveCompost * volInput * (0.6 + 0.3 + 0.2) /60,
        h3 = dataCompost.hours.dry * prodVolume /4 /60,
        h4 = dataCompost.hours.cribble * prod /4 /60 ;
    output[3].hours.push(['Llenar composteadores', h1])
    output[3].hours.push(['Remover', h2])
    output[3].hours.push(['Secar', h3])
    output[3].hours.push(['Tamizar', h4])
    output[3].hours[0][1] = h1 + h2 + h3 + h4
    
    //Production
    output[3].prod = prod * 12
    
    //Investments
    let i1 = boxNumber * dataCompost.invest.box
    output[3].invest.push(['Composteadores', i1, boxNumber])
    output[3].invest[0][1] = i1
    
    //Gains
    output[3].gain = prod * 12 * sellingPrice
}

if(products[3] == 'true') { fCompost(percents[2], prices[3])}

// totals
for (let i=0;i<6;i++){
    output[6].surface[0][1] += output[i].surface[0][1]  //superficie adicional = superficie de los equipos

    output.total.invest += output[i].invest[0][1]
}

output[6].hours[0][1] += 4*5  //estimacion 3h por dia en promedia

for (let i=0;i<7;i++){
    output.total.surface += output[i].surface[0][1] 
    output.total.hours += output[i].hours[0][1] 
}

for(let i=0;i<4;i++){
    output.total.gain += output[i].gain        
    output.total.prod += output[i].prod 
}