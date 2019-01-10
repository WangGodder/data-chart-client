package top.godder.datachartclient.service;

import top.godder.datachartclient.pojo.BaseData;
import top.godder.datachartclient.pojo.Chart;
import top.godder.datachartclient.pojo.ChartType;

/**
 * @author: godder
 * @date: 2019/1/1
 */

public interface ShowChartService<T extends Number> {
    String getChartJsonFromBaseData(BaseData<T> baseData, ChartType type);

}
