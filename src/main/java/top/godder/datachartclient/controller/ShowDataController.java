package top.godder.datachartclient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import top.godder.datachartclient.pojo.BaseData;
import top.godder.datachartclient.pojo.ChartType;
import top.godder.datachartclient.service.ShowChartService;

import javax.annotation.Resource;

/**
 * @author: godder
 * @date: 2019/1/1
 */

@RestController
@RequestMapping(value = "charts")
public class ShowDataController {
    @Value("${dataChart.dataServerUrl}")
    private String chartServerUrl;
    @Autowired
    private RestTemplate restTemplate;
    @Resource(name = "showChartService")
    private ShowChartService showChartService;

    @GetMapping("random_chart")
    public String getRandomChart() {
        BaseData baseData = this.restTemplate.getForObject(chartServerUrl + "random_data", BaseData.class);
        return showChartService.getChartJsonFromBaseData(baseData, ChartType.LINE);
    }
}
