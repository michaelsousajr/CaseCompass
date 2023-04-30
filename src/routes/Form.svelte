<!-- App.svelte -->

<script>
  import * as tf from '@tensorflow/tfjs';

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      input1: formData.get('input1'),
      input2: formData.get('input2'),
    };

    // Use TensorFlow to process the input data and create the CSV file
    const csv = tf.tensor2d([[data.input1, data.input2]]);
    const csvContent = `data:text/csv;charset=utf-8,${csv.arraySync().join('\n')}`;

    // Output the CSV file
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
  }
</script>

<form on:submit={handleSubmit}>
  <label>
    Input 1:
    <input type="text" name="input1">
  </label>

  <label>
    Input 2:
    <input type="text" name="input2">
  </label>

  <button type="submit">Submit</button>
</form>

