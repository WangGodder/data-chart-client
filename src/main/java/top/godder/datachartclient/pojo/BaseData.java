package top.godder.datachartclient.pojo;

import java.util.List;

/**
 * @author: godder
 * @date: 2019/1/1
 */
public class BaseData<T> {
    private String title;
    private List<String> labels;
    private List<List<T>> datas;
    private List<String> datasetLabels;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<List<T>> getDatas() {
        return datas;
    }

    public void setDatas(List<List<T>> datas) {
        this.datas = datas;
    }

    public List<String> getDatasetLabels() {
        return datasetLabels;
    }

    public void setDatasetLabels(List<String> datasetLabels) {
        this.datasetLabels = datasetLabels;
    }
}
