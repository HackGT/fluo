# fl-form



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                | Type      | Default |
| ------------ | ------------ | ---------------------------------------------------------- | --------- | ------- |
| `novalidate` | `novalidate` | Prevent the form from validating inputs before submitting. | `boolean` | `false` |


## Events

| Event       | Description                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `fl-submit` | Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional around the XHR request you use to submit the form's data with. | `CustomEvent<{ formData: any; formElements: HTMLElement[]; }>` |


## Methods

### `getFormData() => Promise<{}>`

Serializes all form controls elements and returns form data.

#### Returns

Type: `Promise<{}>`



### `getFormElements() => Promise<HTMLElement[]>`

Gets all form control elements two levels deep. Filters elements to only those in formControls.

#### Returns

Type: `Promise<HTMLElement[]>`



### `reset() => Promise<void>`

Resets the form

#### Returns

Type: `Promise<void>`



### `submit() => Promise<boolean>`

Submits the form. If all controls are valid, the `fl-submit` event will be emitted and the promise will resolve
with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.

#### Returns

Type: `Promise<boolean>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
