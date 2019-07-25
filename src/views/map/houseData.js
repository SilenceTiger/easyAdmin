//维度
//name        lng     lat      unitPrice      isRenovation     medicalScore  educationScore     businessScore     trafficScore    propertyScore   environmentScore
//房地产名字   经度    纬度     单价均价         是否精装          医疗评分       教育评分             商业评分           交通评分       物业评分        环境评分

//isNewHouse  area    totalPrice    bedroomNum   propertyFee    useFor     description    location
//是否新房     大小    总价           卧室个数      物业费        出租or卖       备注          地址
export const COMPANY_LOCATION = [114.412792, 30.493938] 

export const DIMENSION_MAP = {
    name: '房产名称',
    lng: '经度',
    lat: '纬度',
    unitPrice: '单价',
    area: '面积',
    totalPrice: '总价',
    bedroomNum: '卧室个数',
    isRenovation: '是否精装',
    isNewHouse: '是否新房',
    propertyFee: '物业费',
    useFor: '用途',
    location: '地址',
    description: '描述',
    medicalScore: '医疗',
    educationScore: '教育',
    businessScore: '商业',
    trafficScore: '交通',
    propertyScore: '物业',
    environmentScore: '环境',
}

export const PROPS_MAP = [{
    en: 'name',
    cn: '房产名称'
  },{
    en: 'lng',
    cn: '经度'
  },{
    en: 'lat',
    cn: '纬度'
  },{
    en: 'unitPrice',
    cn: '单价'
  },{
    en: 'area',
    cn: '面积'
  },{
    en: 'totalPrice',
    cn: '总价'
  },{
    en: 'bedroomNum',
    cn: '卧室个数'
  },{
    en: 'isRenovation',
    cn: '是否精装'
  },{
    en: 'isNewHouse',
    cn: '是否新房'
  },{
    en: 'propertyFee',
    cn: '物业费'
  },{
    en: 'useFor',
    cn: '用途'
  },{
    en: 'location',
    cn: '地址'
  },{
    en: 'description',
    cn: '描述'
  },{
    en: 'medicalScore',
    cn: '医疗',
  },{
    en: 'educationScore',
    cn: '教育'
  },{
    en: 'businessScore',
    cn: '商业'
  },{
    en: 'trafficScore',
    cn: '交通'
  },{
    en: 'propertyScore',
    cn: '物业'
  },{
    en: 'environmentScore',
    cn: '环境'
  }]

export const HOUSE_DATA = [{
    name: '中建康城',
    lng: 114.411094,
    lat: 30.471274,
    unitPrice: 18000,
    area: 100,
    totalPrice: 1800000,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.2,
    useFor: '在售',
    location: '中建康城东区18栋2106',
    description: '交通便利',
    medicalScore: 7,
    educationScore: 8,
    businessScore: 10,
    trafficScore: 9,
    propertyScore: 4,
    environmentScore: 5,
}, {
    name: '清江山水',
    lng: 114.401809,
    lat: 30.475233,
    unitPrice: 19600,
    area: 121,
    totalPrice: 2371600,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.8,
    useFor: '出租',
    location: '清江山水18栋2106',
    description: '交通便利',
    medicalScore: 7,
    educationScore: 8,
    businessScore: 9,
    trafficScore: 7.1,
    propertyScore: 8.2,
    environmentScore: 7.4,
}, {
    name: '光谷坐标城',
    lng: 114.412862,
    lat: 30.474282,
    unitPrice: 22000,
    area: 90,
    totalPrice: 1980000,
    bedroomNum: 2,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 3.1,
    useFor: '在售',
    location: '光谷坐标城',
    description: '交通便利，离商业区近',
    medicalScore: 6,
    educationScore: 7.8,
    businessScore: 9,
    trafficScore: 7.1,
    propertyScore: 6.2,
    environmentScore: 7.4,
}, {
    name: '金地太阳城',
    lng: 114.412917,
    lat: 30.490259,
    unitPrice: 233250,
    area: 80,
    totalPrice: 18660000,
    bedroomNum: 2,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.9,
    useFor: '出租',
    location: '金地太阳城',
    description: '交通便利',
    medicalScore: 8.3,
    educationScore: 8.4,
    businessScore: 8.6,
    trafficScore: 8.1,
    propertyScore: 7.2,
    environmentScore: 7.9,
}, {
    name: '保利花园',
    lng: 114.414942,
    lat: 30.499446,
    unitPrice: 25000,
    area: 140,
    totalPrice: 3500000,
    bedroomNum: 4,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 3.5,
    useFor: '出租',
    location: '保利花园',
    description: '交通便利',
    medicalScore: 8.5,
    educationScore: 8.3,
    businessScore: 9.1,
    trafficScore: 7.1,
    propertyScore: 8.8,
    environmentScore: 8.1,
}, {
    name: '当代国际花园',
    lng: 114.41731,
    lat: 30.460716,
    unitPrice: 18600,
    area: 60,
    totalPrice: 1116000,
    bedroomNum: 1,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.6,
    useFor: '在售',
    location: '当代国际花园',
    description: '交通便利',
    medicalScore: 7.6,
    educationScore: 7.7,
    businessScore: 8.1,
    trafficScore: 6.1,
    propertyScore: 6.2,
    environmentScore: 5.4,
}, {
    name: '滨湖壹号',
    lng: 114.416114,
    lat: 30.420869,
    unitPrice: 12350,
    area: 160,
    totalPrice: 1976000,
    bedroomNum: 4,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 1.8,
    useFor: '在售',
    location: '滨湖壹号',
    description: '环境优美',
    medicalScore: 5,
    educationScore: 5,
    businessScore: 4,
    trafficScore: 5,
    propertyScore: 4.2,
    environmentScore: 9,
}, {
    name: '藏龙小区',
    lng: 114.422732,
    lat: 30.415429,
    unitPrice: 13500,
    area: 95,
    totalPrice: 1282500,
    bedroomNum: 2,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.7,
    useFor: '在售',
    location: '藏龙小区',
    description: '环境优美',
    medicalScore: 6,
    educationScore: 7.7,
    businessScore: 6,
    trafficScore: 6.1,
    propertyScore: 7.2,
    environmentScore: 8.4,
}, {
    name: '当代云谷',
    lng: 114.470437,
    lat: 30.455731,
    unitPrice: 14000,
    area: 118,
    totalPrice: 1652000,
    bedroomNum: 3,
    isRenovation: 0,
    isNewHouse: 1,
    propertyFee: 2.5,
    useFor: '在售',
    location: '当代云谷',
    description: '交通便利',
    medicalScore: 7.1,
    educationScore: 7.8,
    businessScore: 8,
    trafficScore: 7.8,
    propertyScore: 8.9,
    environmentScore: 8.4,
}, {
    name: '新城璞樾门第',
    lng: 114.488776,
    lat: 30.466139,
    unitPrice: 21000,
    area: 116,
    totalPrice: 2436000,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.9,
    useFor: '在售',
    location: '新城璞樾门第',
    description: '交通便利',
    medicalScore: 7.4,
    educationScore: 8.1,
    businessScore: 8.6,
    trafficScore: 7.3,
    propertyScore: 8.3,
    environmentScore: 7.6,
}, {
    name: '碧桂园云镜',
    lng: 114.482266,
    lat: 30.474923,
    unitPrice: 18600,
    area: 108,
    totalPrice: 2008800,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 3.4,
    useFor: '在售',
    location: '碧桂园云镜',
    description: '交通便利',
    medicalScore: 6.5,
    educationScore: 7.5,
    businessScore: 8.3,
    trafficScore: 8.1,
    propertyScore: 8.4,
    environmentScore: 6.4,
}, {
    name: '中建星光城',
    lng: 114.479272,
    lat: 30.493629,
    unitPrice: 26000,
    area: 136,
    totalPrice: 3536000,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.6,
    useFor: '在售',
    location: '中建星光城',
    description: '交通便利',
    medicalScore: 9.6,
    educationScore: 8.3,
    businessScore: 9.4,
    trafficScore: 8.1,
    propertyScore: 8.9,
    environmentScore: 9.4,
}, {
    name: '保利时代天悦',
    lng: 114.406807,
    lat: 30.48979,
    unitPrice: 21000,
    area: 75,
    totalPrice: 1575000,
    bedroomNum: 2,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.4,
    useFor: '出租',
    location: '保利时代天悦',
    description: '交通便利',
    medicalScore: 8.3,
    educationScore: 8.4,
    businessScore: 9.5,
    trafficScore: 8.1,
    propertyScore: 7.8,
    environmentScore: 8.4,
}, {
    name: '武汉雅居乐花园',
    lng: 114.378955,
    lat: 30.397486,
    unitPrice: 13800,
    area: 110,
    totalPrice: 1518000,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.3,
    useFor: '在售',
    location: '武汉雅居乐花园',
    description: '环境优化',
    medicalScore: 6.8,
    educationScore: 7.3,
    businessScore: 6.3,
    trafficScore: 6.3,
    propertyScore: 6.2,
    environmentScore: 9.2,
}, {
    name: '碧桂园天玺湾',
    lng: 114.382675,
    lat: 30.387283,
    unitPrice: 17600,
    area: 96,
    totalPrice: 1689600,
    bedroomNum: 2,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 3.1,
    useFor: '在售',
    location: '碧桂园天玺湾',
    description: '交通便利',
    medicalScore: 7.7,
    educationScore: 7.9,
    businessScore: 7.8,
    trafficScore: 8.1,
    propertyScore: 8.6,
    environmentScore: 8.4,
}, {
    name: '光谷澎湃城奥山府',
    lng: 114.483384,
    lat: 30.466232,
    unitPrice: 16500,
    area: 210,
    totalPrice: 3465000,
    bedroomNum: 5,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.4,
    useFor: '在售',
    location: '光谷澎湃城奥山府',
    description: '交通便利',
    medicalScore: 7.2,
    educationScore: 8.5,
    businessScore: 7.4,
    trafficScore: 7.3,
    propertyScore: 8.5,
    environmentScore: 8.8,
}, {
    name: '中粮光谷大悦城',
    lng: 114.497832,
    lat: 30.48869,
    unitPrice: 17999,
    area: 100,
    totalPrice: 1799900,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.6,
    useFor: '在售',
    location: '中粮光谷大悦城',
    description: '交通便利',
    medicalScore: 7.6,
    educationScore: 7.1,
    businessScore: 9.8,
    trafficScore: 7.1,
    propertyScore: 8.2,
    environmentScore: 6.4,
}, {
    name: '朗诗里程',
    lng: 114.51862,
    lat: 30.479401,
    unitPrice: 18200,
    area: 50,
    totalPrice: 910000,
    bedroomNum: 1,
    isRenovation: 1,
    isNewHouse: 0,
    propertyFee: 2.2,
    useFor: '出租',
    location: '清朗诗里程',
    description: '交通便利',
    medicalScore: 7,
    educationScore: 8.6,
    businessScore: 7.2,
    trafficScore: 7.9,
    propertyScore: 7.5,
    environmentScore: 5.4,
}, {
    name: '碧桂园天云玺',
    lng: 114.514804,
    lat: 30.478667,
    unitPrice: 18600,
    area: 118,
    totalPrice: 2194800,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 2.9,
    useFor: '在售',
    location: '碧桂园天云玺',
    description: '交通便利',
    medicalScore: 8.3,
    educationScore: 8.1,
    businessScore: 8.6,
    trafficScore: 8.4,
    propertyScore: 8.5,
    environmentScore: 7.7,
}, {
    name: '龙湖新壹城',
    lng: 114.50832,
    lat: 30.485467,
    unitPrice: 17700,
    area: 104,
    totalPrice: 1840800,
    bedroomNum: 3,
    isRenovation: 1,
    isNewHouse: 1,
    propertyFee: 1.8,
    useFor: '在售',
    location: '龙湖新壹城',
    description: '交通便利',
    medicalScore: 6.8,
    educationScore: 4.9,
    businessScore: 9.5,
    trafficScore: 4.1,
    propertyScore: 5.2,
    environmentScore: 6.4,
}]
