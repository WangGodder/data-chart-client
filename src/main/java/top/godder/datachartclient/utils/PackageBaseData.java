package top.godder.datachartclient.utils;


import top.godder.datachartclient.pojo.*;
import top.godder.datachartclient.pojo.data.Colors;
import top.godder.datachartclient.pojo.data.Dataset;
import top.godder.datachartclient.pojo.options.Elements;
import top.godder.datachartclient.pojo.options.Title;
import top.godder.datachartclient.pojo.options.elements.Line;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author: godder
 * @date: 2019/1/1
 */
public class PackageBaseData {
    public static <T extends Number> List<Dataset<T>> getDatasetsDefault(List<List<T>> datas, List<String> datasetLabels, ChartType type) {
        List<Dataset<T>> datasets = new ArrayList<>(datas.size());
        for (int i = 0; i < datas.size(); i++) {
            List<T> data = datas.get(i);
            String datasetLabel = datasetLabels.get(i);
            Dataset<T> dataset = new Dataset<>();
            dataset.setData(data);
            dataset.setLabel(datasetLabel);
            dataset.setBackgroundColor(Arrays.asList(Colors.values()[i].getRgb()));
            dataset.setBorderColor(Colors.values()[i].getRgb());
            if (type.isLineType()) {
                dataset.setFill("false");
            }
            datasets.add(dataset);
        }
        return datasets;
    }

    public static Options getOptionsDefault(String title, ChartType type) {
        Options options = new Options();
        Title t = new Title();
        t.setText(title);
        options.setTitle(t);
        if (type.isLineType()) {
            Elements elements = new Elements();
            elements.setLine(new Line());
            options.setElements(elements);
        }
        return options;
    }

    public static <T extends Number> Chart<T> getChartDefault(BaseData<T> baseData, ChartType type) {
        Chart<T> chart = new Chart<>();
        chart.setType(type.getType());
        Data<T> data = new Data<>();
        data.setDatasets(getDatasetsDefault(baseData.getDatas(), baseData.getDatasetLabels(), type));
        data.setLabels(baseData.getLabels());
        chart.setData(data);
        chart.setOptions(getOptionsDefault(baseData.getTitle(), type));
        return chart;
    }
}
