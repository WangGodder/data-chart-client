package top.godder.datachartclient.pojo;

/**
 * @author: godder
 * @date: 2019/1/1
 */
public enum ChartType {
    LINE("line", true), RADAR("radar", true) ,BAR("bar", false), PIE("pie", false), DOUGHNUT("doughnut", false);

    private String type;
    private boolean lineType;

    ChartType(String type, boolean lineType) {
        this.type = type;
        this.lineType = lineType;
    }

    public String getType() {
        return type;
    }

    public boolean isLineType() {
        return lineType;
    }
}
