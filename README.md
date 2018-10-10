# reactjs-redux-sample

  [ReactJS](https://reactjs.org/) と [Redux](https://redux.js.org/) を使用した、簡単な動作環境とサンプルを作成します。

  * [Node.js](https://nodejs.org/ja/)
    * ver 8.11.3  
  * [webpack](https://webpack.js.org/)
    * ver 4.12.0
  * [Babel](https://babeljs.io/)
    * ver 6.23.0
    * Node.js で ES6 をコンパイルする
  * [ESLint](https://eslint.org/)
    * ver 4.19.1
    * コーディングルール
  * [Prettier](https://github.com/prettier/prettier)
    * ver 1.13.5
    * コーディングフォーマッタ（`eslint --fix` よりも優れている）
    * 読み方は `プリティア`
    * [prettir-eslint](https://github.com/prettier/prettier-eslint)を使って、prettier で整形した結果を ESlint に渡す。

## 前提条件

  動作確認は、Mac でのみ行っています。  
  動作させるにあたり、以下のアプリがインストールされている必要があります。

  1. [asdf](https://github.com/asdf-vm/asdf)

      ```bash
      $ git clone https://github.com/asdf-vm/asdf.git ~/.asdf
      $ echo -e '\nsource $HOME/.asdf/asdf.sh' >> ~/.bash_profile
      $ echo -e '\nsource $HOME/.asdf/completions/asdf.bash' >> ~/.bash_profile
      $ source ~/.bash_profile
      ```

## サンプルの動作確認手順

  1. Node.jsのインストール  
    [asdf](https://github.com/asdf-vm/asdf)を使用してインストールします。  

      ```bash
      $ asdf install
      ```

      ※ `.tool-versions` に Node.js の使用バージョンが記述されています。

  2. 関連モジュールのインストール  
      ```bash
      $ npm install
      ```

      `package.json` に記述されたライブラリ達が、`node_modules` ディレクトリ内にインストールされます。

  3. [webpack](https://webpack.js.org/) を起動  
      ```bash
      $ npm start
      ```

  4. ローカルのブラウザで [`http://localhost:8888/`](http://localhost:8888/) にアクセス。  
    ページが表示されればOK。

## ESlint実行コマンド

  `package.json` に短縮コマンドを記述してあるので、以下コマンドで実行可能。

  ```bash
  $ npm run lint
  ```

## Reduxの処理の流れメモ

### 静的HTML

  webpack.config.js の `serve`: `content` に記述された public ディレクトリの `index.html` が読み込まれる。

  1. `webpack.config.js`   
    `entry` に記述されているので `/src/index.js` が読み込まれる。   

  2. `/src/index.js`   
    importしている `/src/containers/App.js` が読み込まれる。   

      ```
      import App from './containers/App'
      ```

  3. `/src/containers/App`   
    importしている `/src/containers/Router.js` が読み込まれる。   

      ```
      import Router from './Router'
      ```   

  4. `/src/containers/Router.js`   
    importしている各 component 達が読み込まれ、HTMLを描画する。   

      ```
      import MessageBar from './MessageBar'          // ← 動的表示なのでコンテナ
      import Header from '../components/Header'      // ← 静的HTMLなのでコンポーネント
      import Home from '../components/Home'          // ← 静的HTMLなのでコンポーネント
      import SideMenu from '../components/SideMenu'  // ← 静的HTMLなのでコンポーネント

      :

      const Router = props => {
        const { classes } = props
        return (
          <div style={{ display: 'flex' }}>
            <MessageBar />
            <Header />
            <SideMenu />
            
            /* ここから先はルーティング記述 */
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <ReachRouter>
                <Home path="/" />
              </ReachRouter>
            </main>
          </div>
        )
      }

      export default withStyles(styles)(Router)
      ```

  5. サイドメニューパーツ `/src/components/SideMenu.js`   
    このファイルに記述された HTMLを描画する。   

      ```
      const SideMenu = props => {
        const { classes } = props
        return (
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
            <List>
              <ListItem button key="root" component={Link} to="/">
                <ListItemText primary="Home(ルートURL)" />
              </ListItem>
              <ListItem button key="home" component={Link} to="/home">
                <ListItemText primary="Home(違うURL)" />
              </ListItem>
              <ListItem button key="switch_sample" component={Link} to="/sample/switch">
                <ListItemText primary="Switch サンプル" />
              </ListItem>
            </List>
          </Drawer>
        )
      }
      
      SideMenu.propTypes = {
        classes: PropTypes.object.isRequired
      }
      
      export default withStyles(styles)(SideMenu)
      ```

### 動的HTML

  静的HTMLのサイドメニューからの遷移 "/sample/switch" の追加手順。

  1. `/src/containers/Router.js`   
    ルーティングを追加。

      ```
      import SwitchSample from './sample/Switch'     // ← 追加。動的なのでコンテナから

      :

      const Router = props => {
        const { classes } = props
        return (
          <div style={{ display: 'flex' }}>
            <MessageBar />
            <Header />
            <SideMenu />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <ReachRouter>
                <Home path="/" />
                <Home path="/home" />
                <SwitchSample path="/sample/switch" />   // ← 追加
              </ReachRouter>
            </main>
          </div>
        )
      }
      ```

  2. `/src/containers/sample/Switch.js`   
    アクション関数を割り当て。

      ```
      import {
        fetchSwitchSampleStatus,
      } from '../../actions/sample/Switch'

      :

      /**
       * 初期化された時に呼ばれるライフサイクルイベント
       * トグルスイッチの状態を設定する。
       */
      componentDidMount() {
        this.props.dispatch(fetchSwitchSampleStatus())
      }
      ```

  3. `/src/actions/sample/Switch.js`   
    アクションタイプの定義と、アクション関数を追加。   
    アクション関数は アクションタイプをリターン。

      ```
      /** アクションタイプ */
      export const FETCH_SWITCH_SAMPLE = 'FETCH_SWITCH_SAMPLE'
      
      /** アクション関数 */
      export async function fetchSwitchSampleStatus() {
        try {
          var result = true;  // 本当はここで現在保存されている値を取得してくるイメージ
      
          return {
            type: FETCH_SWITCH_SAMPLE,
            result_checked: result
          }
        } catch (err) {
          return showMessage(err.message)
        }
      }
      ```

  4. `/src/reducers/sample/SwitchStatus.js`   
    state と action の紐づけ。   
    アクションタイプによって分岐してステートを返す。

      ```
      import {
        FETCH_SWITCH_SAMPLE,
      } from '../../actions/sample/Switch'

      // 初期状態
      const initialState = {
        switch_status: {
          checked: false
        }
      }
      
      /**
       * Switchサンプル用のreducer
       *
       * @param {Object} state State
       * @param {Object} action Action
       * @return {Object} state 更新するState
       */
      export default function(state = initialState, action) {
        switch (action.type) {
          case FETCH_SWITCH_SAMPLE:
            return {
              ...state,
              switch_status: {
                checked: action.result_checked
              }
            }
          default:
            return state
        }
      }
      ```
      
      ちなみに `/src/reducers/index.js` で `combineReducers` する必要あり。

      ```
      import { combineReducers } from 'redux'
      import Message from './message'
      import SwitchStatus from './sample/SwitchStatus'
      
      export default combineReducers({
        Message,
        SwitchStatus
      })
      ```

  5. `/src/containers/sample/Switch.js`   
    ステートを受け取ってオブジェクトの状態を変える。（この場合はトグルのON/OFF切り替え）

      ```
      function mapStateToProps(state) {
        return {
          checked: state.SwitchStatus.switch_status.checked
        }
      }
      ```

      そして、ここの記述でコンポーネントと紐づけ。

      ```
      import SwitchSampleComponent from '../../components/sample/Switch'
      :

      class SwitchSample extends React.Component {
        :

        render() {
          return (
            <SwitchSampleComponent
              checked={this.props.checked}
              handleChange={(event, checked) => this.handleChange(event, checked)}
            />
          )
        }
      }
      ```

  6. `/src/components/sample/Switch.js`   
    HTMLを描画。

      ```
      const SwitchSample = props => {
        const { classes, checked, handleChange } = props
        return (
          <div>
            <Paper className={classes.root} elevation={4}>
              <Typography>スイッチオブジェクトの動作テストをする画面だよ</Typography>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      value="checked"
                    />
                  }
                  label={checked ? '有効中' : '無効中'}
                />
              </FormGroup>
            </Paper>
          </div>
        )
      }
      ```

## やったことのメモ

### package.json 生成

  以下のコマンドを実行して、`package.json`を生成。  
  色々質問されるが、エンター連打。

  ```bash
  $ npm init
  ```

### 生成された package.json に必要なライブラリを追記

  ```
  {
    :
    "dependencies": {
      "react": "^16.4.0",
      "redux": "^4.0.0",
      :
    },
    "devDependencies": {
      "webpack": "^4.12.0",
      "eslint": "^4.19.1",
      :
    },
    :
  }
  ```

  本来、以下コマンドで追加するがとりあえずコピペ。

  ```shell
  $ npm install --save react redux ..
  $ npm install --save-dev webpack eslint ..
  ```

### package.json に webpack起動スクリプトを追記

  これにより、`npm start` コマンドで webpack が起動可能になる。

  ```
  {
    :
    :
    "scripts": {
      "start": "webpack-serve --config webpack.config.js",
      :
    },
    :
    :
  }
  ```

### .babelrc を作成

### .eslintrc.yml を作成

  以下の初期コマンドで作成したと思われるが、とりあえずコピペ。

  ```shell
  $ ./node_modules/.bin/eslint --init
  ```

### webpack.config.js を作成

## Learn more

  * React × Redux 初心者入門: https://www.hirooooo-lab.com/entry/development/react-redux-setup-environment-2018
  * Redux入門【ダイジェスト版】10分で理解するReduxの基礎: https://qiita.com/kiita312/items/49a1f03445b19cf407b7
