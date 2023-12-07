// 型エイリアス
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9  
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を表すクラス
class Position{
    constructor(private suji: Suji, private dan: Dan) {
    }
    // パラメータに渡された位置と現在の位置を比較するメソッド
    distanceFrom(position: Position, player: Player) {
        if (player === 'first') {
            return {
                suji: Math.abs(position.suji -this.suji),
                dan : Math.abs(Number(position.dan)-Number(this.dan))

            }
        } else {
            return {
                suji: Math.abs(position.suji -this.suji),
                dan : -(Math.abs(Number(position.dan)-Number(this.dan))) // 後手は段の正負が逆

            }
        }
    }
}


// 駒を表すクラス
// 抽象クラス
abstract class Piece{
    // Pieceクラスとサブクラスでアクセスできる
    protected position: Position
    constructor(
        private readonly player: Player,
        suji: Suji,
        dan: Dan
    ) {
        // インスタンス作成
        this.position = new Position(suji, dan)
    }

    // メソッドの定義
    // 駒の移動用のメソッド
    moveTo(position: Position) {
        this.position = position
    }

    // 移動できるかを判定するメソッド
    // 具体的な実装は各駒のクラス内で行う
    abstract canMoveTo(position: Position, player: Player): boolean
}
    
class Osho extends Piece{
    // 王将のcanMoveToメソッドを定義する
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return (distance.suji < 2 && distance.dan < 2)
    }
}

class Fu extends Piece{
    canMoveTo(position: Position, player: Player): boolean {
        
        const distance = this.position.distanceFrom(position, player)
        return (distance.suji === 0 && distance.dan === 1)
    }
}

class Narikin extends Fu{
    canMoveTo(position: Position, player: Player): boolean {
        
        const distance = this.position.distanceFrom(position, player)
        return (distance.suji < 2 && distance.dan <2 && (distance.suji !== 0 && distance.dan === -1))

    }
}

class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            new Osho('first', 5, '1'),
            new Osho('second', 5, '9')
        ]
    }
}