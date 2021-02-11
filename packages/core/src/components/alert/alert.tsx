import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'fl-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class Alert {
  alert: HTMLElement;
  autoHideTimeout: any;

  @Element() host: HTMLSlAlertElement;

  @State() isVisible = false;

  @Prop({ mutable: true, reflect: true }) open = false;

  @Prop({ reflect: true }) closable = true;

  @Prop({ reflect: true }) type: 'primary';

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  @Method()
  async show() {
    if (this.isVisible) {
      return;
    }

    this.isVisible = true;
    this.open = true;

    if (this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }

  @Method()
  async hide() {
    if (!this.isVisible) {
      return;
    }

    clearTimeout(this.autoHideTimeout);
    this.isVisible = false;
    this.open = false;
  }

  handleCloseClick() {
    this.hide();
  }

  handleMouseMove() {
    this.restartAutoHide();
  }

  handleTransitionEnd(event: TransitionEvent) {
    const target = event.target as HTMLElement;

    if (event.propertyName === 'opacity' && target.classList.contains('alert')) {
      this.isVisible = this.open;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  }

  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }

  render() {
    return (
      <div
        ref={el => (this.alert = el)}
        part="base"
        class={{
          alert: true,
          'alert--open': this.open,
          'alert--visible': this.isVisible,
          'alert--closable': this.closable,
          'alert--primary': this.type === 'primary',
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={this.open ? 'false' : 'true'}
        onMouseMove={this.handleMouseMove}
        onTransitionEnd={this.handleTransitionEnd}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon" />
        </span>

        <span part="message" class="alert__message">
          <slot />
        </span>

        {this.closable && (
          <span class="alert__close">
            {/* Create close icon component!! */}
          </span>
        )}
      </div>
    );
  }
}