package top.godder.datachartclient.pojo;

import top.godder.datachartclient.pojo.data.Dataset;

import java.util.List;

/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Data<T extends Number>{
    private List<String> labels;
    private List<Dataset<T>> datasets;

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<Dataset<T>> getDatasets() {
        return datasets;
    }

    public void setDatasets(List<Dataset<T>> datasets) {
        this.datasets = datasets;
    }

//    public String toJson() {
//        StringBuilder stringBuilder = new StringBuilder();
//        stringBuilder.append('{');
//        stringBuilder.append("labels:");
//        stringBuilder.append(JSON.toJSONString(labels));
//        stringBuilder.append(',');
//        stringBuilder.append("datasets:");
//        stringBuilder.append('[');
//        for (Dataset dataSet: datasets) {
//            stringBuilder.append(dataSet.toJson());
//            stringBuilder.append(',');
//        }
//        stringBuilder.append(']');
//        stringBuilder.append(',');
//
//        stringBuilder.append('}');
//        return stringBuilder.toString();
//    }
}
