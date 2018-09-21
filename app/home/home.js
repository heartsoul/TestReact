import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native'
import ModelItemView from './ModelItemView'
import {
  SegmentedBar,
  PullPicker,
  Label,
  TopView,
  SegmentedView,
  Button,
  Carousel,
  NavigationPage,
} from './../teaset/index'
import { Toast } from 'antd-mobile'

const { width, height } = Dimensions.get('window')
export default class extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '首页',
    showBackButton: true,
  }
  constructor() {
    super()
  }
  _loadDemoPage = () => {
    const navigator = this.props.navigation
    // if (navigator) {
    //   navigator.navigate("TenantList");
    // }
    global.storage.pushNext(navigator, 'DemoPage')
  }
  _loadUserInfo = () => {
    const navigator = this.props.navigation
    // if (navigator) {
    //   navigator.navigate("TenantList");
    // }
    global.storage.pushNext(navigator, 'TenantPage')
  }
  _loadProjectInfo = () => {
    const navigator = this.props.navigation

    // if (navigator) {
    //   navigator.navigate("ProjectList");
    // }
    global.storage.pushNext(navigator, 'ProjectPage')
  }
  _loadQualityForm = () => {
    const navigator = this.props.navigation
    global.storage.projectIdVersionId = ''
    global.storage.fileId = ''
    global.storage.bimToken = {}

    global.storage.pushNext(navigator, 'QualityMainPage')
  }
  _loadEquipmentForm = () => {
    const navigator = this.props.navigation
    global.storage.projectIdVersionId = ''
    global.storage.fileId = ''
    global.storage.bimToken = {}

    global.storage.pushNext(navigator, 'EquipmentMainPage')
  }

  _fileChoose = () => {
    const navigator = this.props.navigation

    global.storage.projectIdVersionId = ''
    global.storage.pushNext(navigator, 'BimFileChooserPage')
  }
  _moduleChoose = () => {
    const navigator = this.props.navigation
    global.storage.projectIdVersionId = ''
    global.storage.pushNext(navigator, 'ModelFileChooserPage')
  }
  _projectChoose = () => {
    const navigator = this.props.navigation
    global.storage.projectIdVersionId = ''
    global.storage.pushNext(navigator, 'ProjectChooserPage')
  }

  componentDidMount() {
    // 请求数据
    // this.fetchData();
  }
  fetchData = () => {
    console.log(global.storage.loadTenant)
    console.log(global.storage.loadProject)

    if (global.storage.loadTenant && global.storage.loadProject) {
    } else {
      // this._loadUserInfo();
    }
  }
  scrollToPage = index => {
    if (parseInt(`${index}`) != parseInt(`${this.refs.carousel.activeIndex}`)) {
      this.refs.carousel.scrollToPage(index)
    }

    Toast.success('Toast message', 3, () => {})
    // Toast.success('Toast success');
    // Toast.fail('Toast fail');
    // Toast.smile('Toast smile');
    // Toast.sad('Toast sad');
    // Toast.info('Toast info');
    // Toast.stop('Toast stop');
    // let items = [
    //   'Apple',
    //   'Banana',
    //   'Cherry',
    //   'Durian',
    //   'Filbert',
    //   'Grape',
    //   'Hickory',
    //   'Lemon',
    //   'Mango',
    // ];
    // PullPicker.show(
    //   'Select item',
    //   items,
    //   0,
    //   (item, index) => this.setState({selectedIndex: index})
    // );
  }

  renderPage() {
    return (
      <View
        style={{ backgroundColor: '#FFFFFE', width: '100%', height: '100%' }}
      >
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor="#00baf3"
        />
        <ImageBackground
          style={{ height: 238 }}
          resizeMode="center"
          source={require('./../images/icon_main_page_top_bg.png')}
        >
          <Carousel
            ref="carousel"
            style={{ height: 238 }}
            carousel={false}
            scrollEnabled={false}
          >
            <Image
              style={styles.topImage}
              resizeMode="center"
              source={require('./../images/icon_main_page_top_quality.png')}
            />
            <Image
              style={styles.topImage}
              resizeMode="center"
              source={require('./../images/icon_main_page_top_equipment.png')}
            />
          </Carousel>
        </ImageBackground>
        <SegmentedView
          style={{ flex: 0, height: 400, backgroundColor: '#f8f8f8' }}
          onChange={index => {
            this.scrollToPage(index)
          }}
          bounces
          type="carousel"
        >
          <SegmentedView.Sheet title="质量检查">
            <View style={styles.tabContent}>
              <ModelItemView
                source={require('./../images/icon_main_pager_zjqd.png')}
                onPress={() => this._loadQualityForm()}
                title="质检清单"
              />
              <View style={styles.spliteItem} />
              <ModelItemView
                source={require('./../images/icon_main_pager_blueprint.png')}
                onPress={() => this._fileChoose()}
                title="图纸"
              />
              <View style={styles.spliteItem} />
              <ModelItemView
                source={require('./../images/icon_main_pager_model.png')}
                onPress={() => this._projectChoose()}
                title="模型"
              />
              <View style={styles.spliteItem} />
              <ModelItemView
                source={require('./../images/icon_main_pager_module.png')}
                onPress={() => this._moduleChoose()}
                title="质检项目"
              />
              <View style={styles.spliteItem} />
            </View>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title="材设进场">
            <View style={styles.tabContent}>
              <ModelItemView
                source={require('./../images/icon_main_pager_csjc.png')}
                onPress={() => this._loadEquipmentForm()}
                title="材设清单"
              />
              <View style={styles.spliteItem} />
              <ModelItemView
                source={require('./../images/icon_main_pager_equipment_model.png')}
                onPress={() => this._moduleChoose()}
                title="模型预览"
              />
            </View>
          </SegmentedView.Sheet>
        </SegmentedView>
        <TopView />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  style_fogotText: {
    color: 'green',
  },
  topImage: {
    width,
    height: 238,
  },
  spliteItem: {
    width: 10,
  },
  tabContent: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    // flex: 1,
    marginLeft: 20,
    marginTop: 40,
    marginRight: 20,
    marginBottom: 40,
    backgroundColor: '#f8f8f8',
  },
})
