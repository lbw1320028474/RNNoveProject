import { StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import AppUtils from '../../Utils/AppUtils'
import GlobleVar from '../../Globle/GlobleVar'
export default class BookRoomViewPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <IndicatorViewPager
                        autoPlayEnable={true}
                        autoPlayInterval={5000}
                        style={{ height: GlobleVar.BannerViewPageHeight }}
                        indicator={this._renderDotIndicator()}
                    >
                        <View>
                            <Image style={styles.pageImageStyle} source={require('../../pages/app_image/banner_test.jpg')}></Image>
                        </View>
                        <View>
                            <Image style={styles.pageImageStyle} source={require('../../pages/app_image/banner_test.jpg')}></Image>
                        </View>
                        <View>
                            <Image style={styles.pageImageStyle} source={require('../../pages/app_image/banner_test.jpg')}></Image>
                        </View>
                    </IndicatorViewPager>
                </View>
                <View style={styles.bottomContainer}>
                    <Image style={styles.bottomImageStyle} resizeMode='stretch' source={require('../../pages/app_image/banner_bottom_image.png')}></Image>
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
        height: 40,
        width: AppUtils.size.width
    },
    pageImageStyle: {
        height: GlobleVar.BannerViewPageHeight,
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