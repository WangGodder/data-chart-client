package top.godder.datachartclient.pojo.data;

import java.util.List;

/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Dataset<T extends Number>{
    private String label = null;
    private List<T> data;
    private String type = null;
    private List<String> backgroundColor;
    private String borderColor;
    private List<Integer> borderDash = null;
    private String fill = null;

    public Dataset() {}

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<String> getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(List<String> backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public String getBorderColor() {
        return borderColor;
    }

    public void setBorderColor(String borderColor) {
        this.borderColor = borderColor;
    }

    public List<Integer> getBorderDash() {
        return borderDash;
    }

    public void setBorderDash(List<Integer> borderDash) {
        this.borderDash = borderDash;
    }

    public String getFill() {
        return fill;
    }

    public void setFill(String fill) {
        this.fill = fill;
    }

}
