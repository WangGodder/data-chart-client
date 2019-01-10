package top.godder.datachartclient.service.impl;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Service;
import top.godder.datachartclient.pojo.BaseData;
import top.godder.datachartclient.pojo.Chart;
import top.godder.datachartclient.pojo.ChartType;
import top.godder.datachartclient.service.ShowChartService;
import top.godder.datachartclient.utils.PackageBaseData;

/**
 * @author: godder
 * @date: 2019/1/1
 */
@Service(value = "showChartService")
public class ShowChartServiceImpl<T extends Number> implements ShowChartService<T> {
    @Override
    public String getChartJsonFromBaseData(BaseData<T> baseData, ChartType type) {
        Chart<T> chart = PackageBaseData.getChartDefault(baseData, type);
        return JSON.toJSONString(chart);
    }
}
