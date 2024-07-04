import type { Uppy, UIPlugin } from '@uppy/core';
import type { ElementRef, SimpleChanges } from '@angular/core';
import type { DragDropopts } from '@uppy/drag-drop';
import type { StatusBaropts } from '@uppy/status-bar';
import type { ProgressBaropts } from '@uppy/progress-bar';

export abstract class UppyAngularWrapper<PluginType extends UIPlugin  = UIPlugin> {
    abstract props: DragDropopts|StatusBaropts|ProgressBaropts;
    abstract el: ElementRef
    abstract uppy: Uppy;
    private opts: any;
    plugin: PluginType | undefined;

    onMount(defaultopts: Record<string, unknown>, plugin: new (uppy: Uppy, opts?: Record<string, unknown>) => UIPlugin) {
      this.opts = {
        ...defaultopts,
        ...this.props,
      };

      this.uppy.use(plugin, this.opts);
      this.plugin = this.uppy.getPlugin(this.opts.id) as PluginType;
    }

    handleChanges(changes: SimpleChanges, plugin: any): void {
      // Without the last part of this conditional, it tries to uninstall before the plugin is mounted
      if (changes['uppy'] && this.uppy !== changes['uppy'].previousValue && changes['uppy'].previousValue !== undefined) {
          this.uninstall(changes['uppy'].previousValue);
          this.uppy.use(plugin, this.opts);
      }
      this.opts = { ...this.opts, ...this.props }
      this.plugin = this.uppy.getPlugin(this.opts.id) as PluginType;
      if(changes['props'] && this.props !== changes['props'].previousValue && changes['props'].previousValue !== undefined) {
        this.plugin.setopts({ ...this.opts })
      }
    }

    uninstall(uppy = this.uppy): void {
        uppy.removePlugin(this.plugin!);
    }

}
