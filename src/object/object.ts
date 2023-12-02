export default function objectSample() {
    const a: object = {
        name: 'rie',
        age
        :28
    }
    // a.name

    // オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    } = {
        language: 'Japanese',
        name: 'Japan'
    }

    console.log('Object object sample 1:', country)

    country = {
        language: 'English',
        name: 'United States of America'
    }
    console.log('Object object sample 2:', country)

    // オプショナルとreadonly
    const torahack: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Yamada',
        firstName: 'Tarou'
    }

    torahack.lastName = 'Satou'
    // torahack.firstName = 'Wataru'
    torahack.gender = 'male'
    console.log('Object object sample 3:', torahack)

    // インデックスシグネチャ
    // オブジェクトが複数のプロパティを持つ可能性を示す
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Korea: 'Seoul'
    }

    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'
    console.log('Object object sample 4:', capitals)
}
