package top.godder.datachartclient.pojo;

import top.godder.datachartclient.pojo.options.*;

/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Options {
    private Legend legend;
    private Title title;
    private Scales scales;
    private Elements elements;
    private Plugins plugins;
    private boolean responsive = true;

    public Legend getLegend() {
        return legend;
    }

    public void setLegend(Legend legend) {
        this.legend = legend;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public Scales getScales() {
        return scales;
    }

    public void setScales(Scales scales) {
        this.scales = scales;
    }

    public Elements getElements() {
        return elements;
    }

    public void setElements(Elements elements) {
        this.elements = elements;
    }

    public Plugins getPlugins() {
        return plugins;
    }

    public void setPlugins(Plugins plugins) {
        this.plugins = plugins;
    }

    public boolean isResponsive() {
        return responsive;
    }

    public void setResponsive(boolean responsive) {
        this.responsive = responsive;
    }
}
