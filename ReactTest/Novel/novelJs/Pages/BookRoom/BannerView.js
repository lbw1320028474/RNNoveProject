import { StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import PagerDotIndicator from '../../viewpager/indicator/PagerDotIndicator'
import IndicatorViewPager from '../../viewpager/IndicatorViewPager'
import AppUtils from '../../Utils/AppUtils'
import GlobleVar from '../../Globle/GlobleVar'
export default class BannerView extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;

    }
    render() {
        //alert(this.props.bannerData);
        let bannerViews = [];
        bannerViews = this.props.dataParams.map((item, index) => {
            return (
                <View key={index}>
                    <Image style={styles.pageImageStyle} source={{ uri: item.bannerImage }}></Image>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <View>
                    <IndicatorViewPager
                        autoPlayEnable={true}
                        autoPlayInterval={5000}
                        style={{ height: GlobleVar.BannerViewPageHeight + GlobleVar.stateBarAdjustViewHeight }}
                        indicator={this._renderDotIndicator()}
                    >
                        {bannerViews}
                    </IndicatorViewPager>
                </View>
                <View style={styles.bottomContainer}>
                    <Image style={styles.bottomImageStyle} resizeMode='stretch' source={require('../../../novelResource/banner_bottom_image.png')}></Image>
                </View>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

}

var styles = StyleSheet.create({
    bottomImageStyle: {
        height: 20,
        width: AppUtils.size.width
    },
    pageImageStyle: {
        height: GlobleVar.BannerViewPageHeight + GlobleVar.stateBarAdjustViewHeight,
        width: AppUtils.size.width
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        position: 'absolute',
        flexDirection: 'column',
        flex: 1,
        // marginTop: AppUtils.stateBarAdjustViewHeight

    },
    container: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flex: 1,
        // marginTop: AppUtils.stateBarAdjustViewHeight

    }
})