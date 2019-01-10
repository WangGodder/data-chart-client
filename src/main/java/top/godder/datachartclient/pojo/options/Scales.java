package top.godder.datachartclient.pojo.options;

import top.godder.datachartclient.pojo.options.scales.Axes;

/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Scales {
    private Axes yAxes;
    private Axes xAxes;

    public Axes getyAxes() {
        return yAxes;
    }

    public void setyAxes(Axes yAxes) {
        this.yAxes = yAxes;
    }

    public Axes getxAxes() {
        return xAxes;
    }

    public void setxAxes(Axes xAxes) {
        this.xAxes = xAxes;
    }
}
